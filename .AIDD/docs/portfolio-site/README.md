# Portfolio Site — `duykhaa.github.io`

## Summary

Personal portfolio/CV website của **Le Duy Kha** — Full-stack Engineer. Đây là một Single Page Application (SPA) trình bày thông tin cá nhân, kinh nghiệm làm việc, kỹ năng, dự án và contact. Deploy tự động lên GitHub Pages qua nhánh `gh-pages`.

---

## Capabilities

- Hiển thị thông tin cá nhân: tên, chức danh, địa chỉ, social links
- Liệt kê kinh nghiệm làm việc theo timeline (full-time + freelance)
- Trình bày kỹ năng dưới dạng progress bar + tag badges
- Showcase portfolio projects theo category (Professional, Academic, Research)
- Trình bày học vấn, chứng chỉ, hoạt động ngoại khóa
- Form liên hệ (UI only — chưa có backend xử lý)
- Download CV trực tiếp (file PDF)
- Responsive trên mobile và desktop

---

## Key Flows

### Visitor vào trang

Visitor mở URL → thấy Hero section (ảnh, tên, chức danh, tech tags) → cuộn xuống lần lượt qua các section: About → Experience → Skills → Education → Portfolio → Contact.

### Điều hướng

Navigation bar cố định trên đầu trang. Khi scroll, nav tự highlight section đang xem. Click vào nav item → trang cuộn mượt tới section tương ứng.

### Download CV

Click "Download CV" (nav) hoặc "Download Resume" (hero) → mở file `fullstack.pdf` trong tab mới.

### Xem portfolio

Portfolio section chia thành featured projects (ảnh thumbnail + hover overlay) và các nhóm projects theo category. Hiện tại các link "View Details" và "Code" chưa trỏ đến URL thật.

### Liên hệ

Visitor điền form (First Name, Last Name, Email, Subject, Message) và bấm Send — form hiện tại **chưa có backend**, chưa gửi email.

---

## Known Issues / Future Work

| Vấn đề | Mô tả |
|--------|-------|
| Contact form | Không có submit handler, không gửi email |
| Portfolio links | `liveUrl` và `githubUrl` đều là `"#"` |
| Portfolio images | Hầu hết dùng `/placeholder.svg` (chỉ Xbot có ảnh thật) |
| Dark mode | CSS vars đã có nhưng không có UI toggle |

---

## Detail Files

| File | Nội dung |
|------|----------|
| [architecture.md](./architecture.md) | Tech stack, file tree, design system, routing |
| [components.md](./components.md) | Catalog 8 CV components |
| [deploy.md](./deploy.md) | How to run locally + deploy lên GitHub Pages |
