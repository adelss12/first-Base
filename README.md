# 📘 المرجع السريع لأوامر Git الأساسية

<p align="right">
  <img src="https://shields.io" alt="Git">
  <img src="https://shields.io" alt="GitHub">
  <img src="https://shields.io" alt="Markdown">
  <img src="https://shields.io" alt="Status">
</p>

دليل سريع ومنظم لأبرز أوامر Git الأساسية مرتبة حسب الاستخدام:

---

## 1. إنشاء مشروع جديد لأول مرة
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com
git push -u origin main
```

## 2. متابعة حالة الملفات والتغييرات
```bash
git status
git diff
git diff --staged
```

## 3. رفع تعديلات ملف معين
```bash
git add <اسم_الملف>
git commit -m "Update specific file"
git push
```

## 4. أوامر التراجع والطوارئ
```bash
git restore --staged <اسم_الملف>     # إلغاء الـ add
git restore <اسم_الملف>             # إلغاء التعديلات غير المحفوظة
git rm --cached <اسم_الملف>         # إزالة الملف من التتبع مع إبقائه محلياً
```
