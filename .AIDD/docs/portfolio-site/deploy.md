# Deploy — Local Dev & GitHub Pages Deployment

## Prerequisites

- Node.js ≥ 18
- npm (hoặc bun — project có `bun.lockb`)
- Git đã cấu hình với quyền push lên repo `duykha0205/duykhaa.github.io`

---

## Run Locally (Development)

```bash
# 1. Clone repo (nếu chưa có)
git clone https://github.com/duykha0205/duykhaa.github.io.git
cd duykhaa.github.io

# 2. Cài dependencies
npm install

# 3. Chạy dev server
npm run dev
```

Dev server chạy tại: **`http://localhost:8080`**

> Dev mode: `base = '/'` → asset paths không có prefix `/duykhaa.github.io/`
> Vite server config: `host: "::"` (bind all interfaces), `port: 8080`

### Scripts khác

```bash
npm run lint          # ESLint check
npm run preview       # Preview production build locally (sau khi đã build)
npm run build:dev     # Build với mode=development (để debug)
```

---

## Deploy lên GitHub Pages

### Cơ chế hoạt động

```
Branch: main (source code)
  ↓ npm run deploy
Branch: gh-pages (built output — dist/)
  ↓ GitHub Pages serve tự động
URL: https://duykha0205.github.io/duykhaa.github.io/
```

Package `gh-pages` push nội dung thư mục `dist/` lên branch `gh-pages`. GitHub Pages được cấu hình để serve từ branch đó.

### Lệnh deploy

```bash
npm run deploy
```

Lệnh này tự động chạy 2 bước (qua `predeploy` hook):

```json
"predeploy": "npm run build",
"deploy":    "gh-pages -d dist"
```

### Chi tiết bước build (predeploy)

```bash
vite build && cp dist/index.html dist/404.html
```

1. **`vite build`**: Build production bundle vào `dist/`
   - `base = '/duykhaa.github.io/'` (từ `vite.config.ts`)
   - Tất cả asset paths được prefix `/duykhaa.github.io/`

2. **`cp dist/index.html dist/404.html`**: Fix SPA routing trên GitHub Pages
   - GitHub Pages không hỗ trợ SPA routing — URL lạ trả về 404
   - Copy `index.html` → `404.html` để GitHub Pages serve React app khi gặp bất kỳ 404 nào
   - React Router sau đó xử lý routing phía client

### Config quan trọng

**`vite.config.ts`:**
```typescript
base: mode === 'production' ? '/duykhaa.github.io/' : '/'
```

**`package.json`:**
```json
"homepage": "https://duykha0205.github.io/duykhaa.github.io"
```

---

## Asset URLs trong code

Vì `base` thay đổi theo môi trường, **không dùng hardcoded paths**. Luôn dùng `import.meta.env.BASE_URL`:

```typescript
// ✅ Đúng
window.open(`${import.meta.env.BASE_URL}platform.pdf`, '_blank')

// ❌ Sai — sẽ bị broken trên production
window.open('/platform.pdf', '_blank')
```

---

## GitHub Pages Config

| Setting | Giá trị |
|---------|---------|
| Repository | `duykha0205/duykhaa.github.io` |
| Pages source | Branch `gh-pages`, folder `/ (root)` |
| URL | `https://duykha0205.github.io/duykhaa.github.io/` |

> **Lưu ý:** Repo tên `duykhaa.github.io` (username khác với `duykha0205`) nên **không** được serve ở root `https://duykha0205.github.io/` mà cần sub-path `/duykhaa.github.io/`. Đây là lý do cần config `base`.

---

## Thêm file tĩnh mới vào public/

Khi cần thêm ảnh portfolio hoặc file PDF mới:

```bash
# 1. Copy file vào public/
cp my-image.png public/projects/my-image.png

# 2. Dùng trong code (không cần import)
image: "/projects/my-image.png"
# → Runtime: BASE_URL + "projects/my-image.png"
```

---

## Troubleshoot

### Assets 404 trên production

Kiểm tra: URL có prefix `/duykhaa.github.io/` không?
→ Đảm bảo code dùng `import.meta.env.BASE_URL` thay vì path tuyệt đối.

### Trang trắng sau deploy

Có thể do `base` config sai.
→ Kiểm tra `vite.config.ts`: `mode === 'production'` → `'/duykhaa.github.io/'`

### Branch gh-pages không update

`gh-pages` package dùng git push force. Nếu bị lỗi permission:
```bash
# Kiểm tra git remote
git remote -v

# Đảm bảo đã auth GitHub (SSH key hoặc HTTPS token)
```
