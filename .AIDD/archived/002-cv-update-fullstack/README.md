# 001 — CV Update: Fullstack Engineer

**Date:** 2026-02-28  
**Status:** Proposed  
**Scope:** `src/components/cv/` — data-only changes (no layout/logic changes)

---

## Summary

CV mới (Feb 2026) thay đổi 4 điểm so với website hiện tại:

1. **Title + Summary** — đổi từ "Data & AI Platform Engineer" → "Full-stack Engineer"
2. **New Freelance Project** — thêm Nextlab Company (Feb 2026)
3. **New Certification** — AWS Certified Solutions Architect – Associate 2025
4. **CV PDF filename** — đổi từ `platform.pdf` → `fullstack.pdf`

---

## Changes Detail

### 1. Title & Summary (Header.tsx + About.tsx)

**Header.tsx** — đổi title tag `<h2>`:
```
Before: Data & AI Platform Engineer
After:  Full-stack Engineer
```

**About.tsx** — đổi description paragraph:
```
Before:
  Platform Engineer with nearly 4 years of experience building scalable 
  data and AI cloud infrastructure. Aspiring Solution Architect focused 
  on data platform architecture, DevOps automation, and AI system integration.

After:
  Full-stack Engineer with 4 years of experience building end-to-end AI 
  and data applications. Expertise spans full-stack development, data pipeline 
  architecture, DevOps automation, and AI system integration. Aspiring Solution 
  Architect focused on delivering innovative AI-driven products and 
  data-intensive applications.
```

---

### 2. New Freelance Project — Nextlab Company (Experience.tsx)

Thêm entry mới vào `freelanceExperience` (hoặc đổi thành mảng `freelanceExperiences[]`):

```typescript
{
  title: "Full-stack Engineer",
  company: "Nextlab Company",
  period: "Feb 2026",
  location: "POC Project",
  description: "Delivered a full-stack Proof of Concept (POC) in ~15 hours. Clarified BRD, designed solution architecture (LakeHouse Bronze/Silver/Gold, 4-level audit framework), and authored technical specs + API contracts.",
  technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "Google Gemini 2.0 Flash", "Terraform", "Cloud Run", "Docker"],
  projects: [
    {
      name: "AI-Powered HR Document Audit Tool",
      description: "Built AI pipeline (Gemini 2.0 Flash) for classifying 32 document types, quality checks, and OCR extraction. Developed 3-level audit engine, Next.js dashboard, and Excel reports."
    }
  ]
}
```

> **Note:** `freelanceExperience` hiện là object đơn, cần đổi thành array `freelanceExperiences` và cập nhật render logic trong JSX (`.map()` thay vì dùng trực tiếp).

---

### 3. New Certification (Education.tsx)

Thêm vào đầu mảng `certifications`:

```typescript
{
  name: "AWS Certified Solutions Architect – Associate",
  issuer: "AWS",
  year: "2025"
}
```

---

### 4. CV PDF Filename (Navigation.tsx + Header.tsx)

Tìm và thay tất cả reference đến `platform.pdf` → `fullstack.pdf`:

| File | Dòng cần đổi |
|------|-------------|
| `src/components/cv/Navigation.tsx` | `BASE_URL + 'platform.pdf'` → `'fullstack.pdf'` |
| `src/components/cv/Header.tsx` | `BASE_URL + 'platform.pdf'` → `'fullstack.pdf'` |

---

## Files to Change

| File | Loại thay đổi |
|------|--------------|
| `src/components/cv/Header.tsx` | Title text + PDF filename |
| `src/components/cv/About.tsx` | Summary paragraph |
| `src/components/cv/Experience.tsx` | Add Nextlab freelance + refactor to array |
| `src/components/cv/Navigation.tsx` | PDF filename |
| `src/components/cv/Education.tsx` | Add AWS cert |

---

## Docs to Update (after implementation)

| File | Gì cần đổi |
|------|-----------|
| `docs/portfolio-site/README.md` | Title, freelance entry count |
| `docs/portfolio-site/components.md` | Summary text, Freelance table, Certifications list |
| `docs/portfolio-site/architecture.md` | PDF filename reference |

---

## Out of Scope

- Không thay đổi layout, styling, animations
- Không thêm backend/form handler
- Không thêm portfolio project mới (Nextlab là freelance, không phải portfolio item)
