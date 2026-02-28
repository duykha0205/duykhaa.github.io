# Components — CV Component Catalog

> Chỉ document 8 custom components trong `src/components/cv/`.
> shadcn/ui components (`src/components/ui/`) là thư viện bên ngoài — xem docs tại [ui.shadcn.com](https://ui.shadcn.com).

---

## Cấu trúc tổng quan

```
src/components/cv/
├── Navigation.tsx    ← Sticky nav bar, scroll tracking
├── Header.tsx        ← Hero section
├── About.tsx         ← Stats summary
├── Experience.tsx    ← Work history
├── Skills.tsx        ← Skill levels + tech tags
├── Education.tsx     ← Degrees, certs, activities
├── Portfolio.tsx     ← Project showcase
└── Contact.tsx       ← Contact info + form
```

Tất cả được compose theo thứ tự trong `src/pages/Index.tsx`:

```tsx
<Navigation />         // fixed, outside <main>
<main>
  <section id="home">      <Header />     </section>
  <section id="about">     <About />      </section>
  <section id="experience"><Experience /> </section>
  <section id="skills">    <Skills />     </section>
  <section id="education"> <Education />  </section>
  <section id="portfolio"> <Portfolio />  </section>
  <section id="contact">   <Contact />    </section>
</main>
```

---

## 1. Navigation

**File:** `src/components/cv/Navigation.tsx`
**Props:** không có (stateful, đọc từ DOM)

### Mô tả

Sticky nav bar cố định trên đầu trang. Tự điều chỉnh appearance khi scroll và highlight nav item tương ứng với section đang xem.

### State

| State | Type | Mô tả |
|-------|------|-------|
| `activeSection` | `string` | ID section đang active (mặc định: `"home"`) |
| `isScrolled` | `boolean` | `true` khi `window.scrollY > 50` |

### Behavior

- `isScrolled = false`: nav trong suốt (`bg-transparent`)
- `isScrolled = true`: nav có background trắng mờ + shadow + border
- Scroll listener detect section active bằng cách check `getBoundingClientRect()` — section nào có `top <= 100 && bottom >= 100` thì active
- Click nav item → `scrollIntoView({ behavior: 'smooth' })`
- "Download CV" button → mở `fullstack.pdf` trong tab mới

### Nav items

```typescript
[Home, About, Experience, Skills, Education, Portfolio, Contact]
// → tương ứng với section id: home, about, experience, skills, education, portfolio, contact
```

---

## 2. Header

**File:** `src/components/cv/Header.tsx`
**Props:** không có (data hardcoded)

### Mô tả

Hero section full-height. Hiển thị avatar placeholder, tên, chức danh, location, tech skill tags, action buttons, và social links.

### Nội dung (hardcoded)

| Field | Giá trị |
|-------|---------|
| Name | Le Duy Kha |
| Title | Full-stack Engineer |
| Location | Ho Chi Minh City, Vietnam |
| Avatar | Text placeholder "LDK" (chưa có ảnh thật) |
| Skill tags | Python, Kafka, AWS, Kubernetes, LLM, FastAPI |

### Actions

| Button | Hành động |
|--------|-----------|
| Download Resume | `window.open(BASE_URL + 'platform.pdf', '_blank')` |
| View Portfolio | `document.getElementById('portfolio').scrollIntoView()` |
| GitHub icon | Link tới `github.com/duykha0205` |
| LinkedIn icon | Link tới `linkedin.com/in/duy-khaa` |
| Email icon | `mailto:duykha0205@gmail.com` |

### Background

Gradient: `from-cv-white via-cv-brown-light to-cv-yellow-soft` (135deg)

---

## 3. About

**File:** `src/components/cv/About.tsx`
**Props:** không có (data hardcoded)

### Mô tả

Section tóm tắt giới thiệu bản thân. Gồm một đoạn text mô tả và 4 stat cards.

### Stats data

```typescript
[
  { icon: Briefcase, value: "~4 Years",  label: "Experience"      },
  { icon: FolderKanban, value: "15+",    label: "Projects"        },
  { icon: Target,     value: "Data/AI",  label: "Specialization"  },
  { icon: Languages,  value: "TOEIC 765",label: "English"         },
]
```

### Layout

- Text mô tả: centered, `max-w-3xl`
- Stats: `grid grid-cols-2 md:grid-cols-4` — 4 card cạnh nhau trên desktop

---

## 4. Experience

**File:** `src/components/cv/Experience.tsx`
**Props:** không có (data hardcoded)

### Mô tả

Hiển thị lịch sử làm việc dưới dạng danh sách cards. Chia 2 nhóm: **Work Experience** (3 vị trí) và **Freelance Experience** (2 vị trí).

### Data structure

```typescript
type Experience = {
  title: string;
  company: string;
  period: string;         // "Dec 2024 - Present"
  location: string;
  description: string;
  technologies: string[]; // tech badge tags
  projects: {
    name: string;
    description: string;
  }[];
}
```

### Work experiences (theo thứ tự)

| Vị trí | Công ty | Thời gian |
|--------|---------|-----------|
| Data Engineer | TechX Company | Dec 2024 – Present |
| Data Engineer - Data Operation | Yes4All Company | Aug 2023 – Nov 2024 |
| Python Engineer | Namiq Company | May 2022 – Apr 2023 |

### Freelance

| Vị trí | Công ty | Thời gian |
|--------|---------|-----------|
| Platform Engineer | Mernva Technologies (India, Remote) | Jul 2023 – Nov 2024 |

### Layout mỗi card

- Header: Title + Company | Period + Location
- Body: Description text
- Projects: danh sách `border-l-2 border-cv-yellow` (vertical line accent)
- Footer: technology badges

---

## 5. Skills

**File:** `src/components/cv/Skills.tsx`
**Props:** không có (data hardcoded)

### Mô tả

Hiển thị kỹ năng theo 3 hình thức: progress bars (theo category), badge tags (databases/frameworks/tools), và soft skill badges.

### Skill categories (progress bars)

```typescript
// 3 categories × 4 skills each
Programming: Python(95%), TypeScript(80%), Golang(75%), Rust(70%)
Data & AI:   Apache Kafka(90%), Apache Airflow(85%), LLM/AI(90%), PyTorch(85%)
Cloud/DevOps: AWS(85%), Kubernetes(80%), Docker(90%), Terraform(75%)
```

### Tag groups

```typescript
databases:  ["PostgreSQL","TimescaleDB","MySQL","MongoDB","Redis","MinIO","Iceberg"]
frameworks: ["FastAPI","PySpark","PyTorch","LangChain","Selenium","React"]
tools:      ["Git","Docker","Kubernetes","Grafana","VS Code","Postman"]
```

### Soft skills

`["Teamwork", "Communication", "Listening", "Leadership"]`

---

## 6. Education

**File:** `src/components/cv/Education.tsx`
**Props:** không có (data hardcoded)

### Mô tả

3 sub-sections: học vấn chính quy, chứng chỉ & giải thưởng, hoạt động ngoại khóa.

### Education data

```typescript
type Education = {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  description: string;
  courses: string[];
}
```

| Bằng | Trường | GPA |
|------|--------|-----|
| B.Sc Computer Science | VNUHCM – University of Science | 8.4/10 |
| High School | Luong The Vinh High School for the Gifted | Graduated |

### Certifications (5 items)

| Tên | Issued by | Năm |
|-----|-----------|-----|
| AWS Certified Solutions Architect – Associate | AWS | 2025 |
| Top 2 MedTech – HackYouth 2023 | Vin Uni | 2023 |
| Machine Learning in Production | Coursera | 2022 |
| SAT Math Level 2 (800/800) | SAT Exam | 2021 |
| Deep Learning Specialization | Coursera | 2021 |

### Activities (3 items)

| Role | Tổ chức | Thời gian |
|------|---------|-----------|
| Volunteer | HOPE Charity | 2024 – Present |
| Coordinator | MLOpsVN Community | 2023 – Present |
| Head of Department | SAB in HCMUS Student Organization | 2020 – 2022 |

---

## 7. Portfolio

**File:** `src/components/cv/Portfolio.tsx`
**Props:** không có (data hardcoded)

### Mô tả

Showcase projects. Chia thành 2 khu vực: **Featured Projects** (có ảnh thumbnail + hover overlay) và **Category Projects** (list gọn hơn theo nhóm).

### Project data structure

```typescript
type Project = {
  title: string;
  description: string;
  image: string;           // path relative to public/
  technologies: string[];
  liveUrl: string;         // ⚠️ hiện tại tất cả là "#"
  githubUrl: string;       // ⚠️ hiện tại tất cả là "#"
  featured: boolean;
  type: "Professional" | "Personal" | "Academic" | "Research" | "Course Project";
}
```

### Projects hiện tại (6 projects)

| Tên | Type | Featured | Ảnh |
|-----|------|----------|-----|
| XGenAI - Internal Agent Chatbot | Professional | ✅ | placeholder.svg |
| Xbot - Multi-Agent System | Professional | ✅ | /Xbot/xbot_ui.png |
| EOD - Enterprise Streaming | Professional | ❌ | placeholder.svg |
| LLM Monitoring Platform | Course Project | ❌ | placeholder.svg |
| Chat Bot Document Summary | Research | ❌ | placeholder.svg |
| Photorealistic Image Translation | Academic | ❌ | placeholder.svg |

### Render logic

```
Featured (featured=true) → grid 2 cols, card có ảnh + hover overlay "View Details / Code"
Non-featured → group theo type, grid 3 cols, card nhỏ hơn, show tối đa 3 tech badges + "+N" badge
```

### Image URL pattern

```typescript
// Prefix BASE_URL để đúng với production path
src={`${import.meta.env.BASE_URL}${image.startsWith('/') ? image.slice(1) : image}`}
```

---

## 8. Contact

**File:** `src/components/cv/Contact.tsx`
**Props:** không có

### Mô tả

2 cột: bên trái là thông tin liên lạc, bên phải là form gửi tin nhắn.

### Contact info

| Field | Giá trị |
|-------|---------|
| Email | duykha0205@gmail.com |
| Website | kha.nichedatainsight.com |
| Location | Ho Chi Minh City, Vietnam |

### Available for

- Data Platform Engineering roles
- AI Integration projects
- Consulting & freelance work
- Technical discussions

### Form fields

`firstName`, `lastName`, `email`, `subject`, `message` (textarea, 4 rows)

> ⚠️ **Form chưa có submit handler** — bấm "Send Message" không làm gì. Cần tích hợp backend/email service (ví dụ: Formspree, EmailJS, hoặc API endpoint).
