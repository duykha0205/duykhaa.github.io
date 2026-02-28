# Architecture — Technical Reference

## Tech Stack

| Layer | Library / Tool | Version |
|-------|---------------|---------|
| UI Framework | React | ^18.3.1 |
| Language | TypeScript | ^5.8.3 |
| Build tool | Vite (SWC compiler) | ^5.4.19 |
| Styling | TailwindCSS | ^3.4.17 |
| UI Primitives | shadcn/ui (Radix UI) | nhiều packages |
| Routing | React Router DOM | ^6.30.1 |
| Server state | TanStack React Query | ^5.83.0 |
| Icons | Lucide React | ^0.462.0 |
| Notifications | Sonner + Radix Toast | — |
| Deploy | gh-pages npm package | ^6.3.0 |

**Khởi tạo từ:** [Lovable.dev](https://lovable.dev) (template: `vite_react_shadcn_ts`)

---

## File Tree

```
duykhaa.github.io/
├── index.html                   # HTML entry, SEO meta tags, OG tags
├── vite.config.ts               # Vite config (base URL, SWC, alias)
├── tailwind.config.ts           # Tailwind theme (colors, animations)
├── postcss.config.js            # PostCSS (autoprefixer)
├── tsconfig.json                # TypeScript project refs
├── tsconfig.app.json            # App tsconfig (target: ES2020)
├── tsconfig.node.json           # Node tsconfig (cho vite.config)
├── package.json                 # Scripts, dependencies
├── components.json              # shadcn/ui config (aliases, style)
├── eslint.config.js             # ESLint (react-hooks, react-refresh)
│
├── public/
│   ├── platform.pdf             # File CV để download
│   ├── favicon.ico
│   ├── robots.txt
│   ├── placeholder.svg          # Placeholder cho portfolio images
│   └── Xbot/
│       └── xbot_ui.png          # Ảnh thật của project Xbot
│
└── src/
    ├── main.tsx                 # React DOM createRoot → <App />
    ├── App.tsx                  # Providers + BrowserRouter + Routes
    ├── App.css                  # (hiện trống / không dùng)
    ├── index.css                # Tailwind base + CSS design tokens
    ├── vite-env.d.ts            # Vite env type declarations
    │
    ├── pages/
    │   ├── Index.tsx            # Trang chính (compose các sections)
    │   └── NotFound.tsx         # 404 page
    │
    ├── components/
    │   ├── cv/                  # 8 custom business components
    │   │   ├── Navigation.tsx
    │   │   ├── Header.tsx
    │   │   ├── About.tsx
    │   │   ├── Experience.tsx
    │   │   ├── Skills.tsx
    │   │   ├── Education.tsx
    │   │   ├── Portfolio.tsx
    │   │   └── Contact.tsx
    │   └── ui/                  # 49 shadcn/ui components (không sửa)
    │
    ├── hooks/
    │   ├── use-mobile.tsx       # Hook detect mobile breakpoint
    │   └── use-toast.ts         # Hook quản lý toast state
    │
    └── lib/
        └── utils.ts             # cn() = clsx + tailwind-merge
```

---

## Routing

Chỉ có 2 routes (React Router DOM v6, `BrowserRouter`):

```
/        → <Index />     (trang chính — single page, scroll navigation)
/*       → <NotFound />  (catch-all 404)
```

**`basename`** được set từ `import.meta.env.BASE_URL`:
- Development: `/`
- Production: `/duykhaa.github.io/`

Toàn bộ navigation giữa các sections là **scroll-based** (`scrollIntoView`), không dùng routes.

---

## App Providers (App.tsx)

```
<QueryClientProvider>        ← TanStack React Query
  <TooltipProvider>          ← Radix UI Tooltip context
    <Toaster />              ← Radix Toast notifications
    <Sonner />               ← Sonner toast (floating)
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
</QueryClientProvider>
```

---

## Design System

### CSS Variables (index.css)

Toàn bộ màu sắc dùng CSS custom properties (HSL format), định nghĩa trong `:root`:

| Token | HSL | Dùng cho |
|-------|-----|----------|
| `--cv-white` | `0 0% 100%` | Background chính |
| `--cv-silver` | `240 5% 85%` | Borders, input backgrounds |
| `--cv-grey` | `240 5% 65%` | Secondary text, labels |
| `--cv-grey-dark` | `240 8% 25%` | Body text |
| `--cv-yellow` | `45 95% 60%` | Accent, badges, highlights |
| `--cv-yellow-soft` | `45 85% 92%` | Subtle backgrounds, hover states |
| `--cv-brown` | `30 25% 35%` | Primary color (headings, buttons) |
| `--cv-brown-light` | `30 15% 85%` | Section muted backgrounds |

**Semantic mappings:**
- `--primary` → `cv-brown`
- `--accent` → `cv-yellow`
- `--muted` → `cv-brown-light`
- `--border` / `--input` → `cv-silver`

### Tailwind Theme Extensions (tailwind.config.ts)

Các màu trên được expose qua Tailwind classes: `bg-cv-brown`, `text-cv-yellow`, v.v.

**Animations tự định nghĩa:**

| Class | Keyframe | Duration |
|-------|----------|----------|
| `animate-fade-in` | opacity 0→1, translateY 20px→0 | 0.6s ease-out |
| `animate-slide-in` | opacity 0→1, translateX -20px→0 | 0.4s ease-out |
| `animate-scale-in` | opacity 0→1, scale 0.9→1 | 0.3s ease-out |

### Path Alias

```typescript
"@" → "./src"
// Ví dụ:
import { Button } from "@/components/ui/button"
```

### Asset URL Pattern

Vì `base` thay đổi giữa dev/prod, tất cả asset dùng `import.meta.env.BASE_URL`:

```typescript
// Platform PDF
window.open(`${import.meta.env.BASE_URL}platform.pdf`, '_blank')

// Portfolio images
src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
```

---

## Dark Mode

CSS vars cho `.dark` class đã có trong `index.css` (Radix default dark palette). Tuy nhiên **chưa có UI toggle** — không có `ThemeProvider` hay nút switch dark mode trong code hiện tại.
