# <p align="right">📘 المرجع السريع لأوامر Git الأساسية</p>

---

## <p align="right">🔷 1. الأوامر الأولية لإنشاء مشروع جديد (من الصفر)</p>

<blockquote>
<p align="right">تُنفذ هذه المجموعة بالترتيب <b>مرة واحدة فقط</b> عند ربط مجلدك المحلي بمستودع GitHub جديد.</p>
</blockquote>

> [!NOTE]
> ### <p align="right">📋 أمر التهيئة الأولية</p>
> ```bash
> git init
> ```
> <p align="right">💡 لتهيئة المجلد الحالي كمستودع Git محلي.</p>

> [!NOTE]
> ### <p align="right">📋 أمر تجهيز الملفات</p>
> ```bash
> git add .
> ```
> <p align="right">💡 لتجهيز جميع ملفات المشروع الحالية لبدء تتبعها (سيقرأ ملف .gitignore تلقائياً).</p>

> [!NOTE]
> ### <p align="right">📋 أمر حفظ التعديلات محلياً</p>
> ```bash
> git commit -m "Initial commit"
> ```
> <p align="right">💡 لحفظ أول لقطة للمشروع في الذاكرة المحلية.</p>

> [!NOTE]
> ### <p align="right">📋 أمر تسمية الفرع الرئيسي</p>
> ```bash
> git branch -M main
> ```
> <p align="right">💡 لتسمية الفرع الرئيسي بـ main ليتطابق مع النظام الافتراضي لـ GitHub.</p>

> [!NOTE]
> ### <p align="right">📋 أمر ربط المستودع عن بعد</p>
> ```bash
> git remote add origin https://github.com
> ```
> <p align="right">💡 لربط مجلدك المحلي برابط مستودعك على السيرفر (استبدل الرابط برابط مستودعك الخاص).</p>

> [!NOTE]
> ### <p align="right">📋 أمر الرفع الافتراضي الأول</p>
> ```bash
> git push -u origin main
> ```
> <p align="right">💡 لرفع الملفات أول مرة وتثبيت الفرع كافتراضي للمستقبل.</p>

---

## <p align="right">🔷 2. مقارنة الملفات ومعرفة حالة المشروع (قبل التجهيز والرفع)</p>

<blockquote>
<p align="right">تُاستخدم لمراقبة التعديلات والتأكد من الملفات قبل حفظها.</p>
</blockquote>

> [!TIP]
> ### <p align="right">🔎 فحص حالة المستودع</p>
> ```bash
> git status
> ```
> <p align="right">💡 يوضح لك الملفات المعدلة، الجديدة، والتي لم يتم تتبعها بعد.</p>

> [!TIP]
> ### <p align="right">🔎 فحص التعديلات الدقيقة</p>
> ```bash
> git diff
> ```
> <p align="right">💡 يظهر التغييرات الدقيقة والأسطر المضافة/المحذوفة في الكود قبل عمل add.</p>

> [!TIP]
> ### <p align="right">🔎 فحص الملفات المجهزة</p>
> ```bash
> git diff --staged
> ```
> <p align="right">💡 لمقارنة الملفات التي عملت لها add بالفعل للتأكد منها قبل الـ Commit النهائي.</p>

---

## <p align="right">🔷 3. رفع ملف جديد أو ملف واحد محدث (إلى مشروع قائم)</p>

> [!TIP]
> ### <p align="right">🚀 رفع تحديث ملف مخصص</p>
> ```bash
> git add first-Base.txt
> git commit -m "Update specific file"
> git push
> ```
> <p align="right">💡 خطوات متسلسلة لتجهيز وحفظ ورفع ملف معين فقط دون بقية المجلد.</p>

---

## <p align="right">🔷 4. أوامر التراجع وإلغاء الأخطاء (مجموعة الطوارئ)</p>

> [!CAUTION]
> ### <p align="right">⚠️ إلغاء التجهيز (Undo Add)</p>
> ```bash
> git restore --staged first-Base.txt
> ```
> <p align="right">💡 إذا عملت git add لملف بالخطأ، هذا الأمر يخرجه من التجهيز ويعيده لحالته السابقة دون حذف كودك.</p>

> [!CAUTION]
> ### <p align="right">⚠️ التراجع عن تعديلات غير محفوظة</p>
> ```bash
> git restore first-Base.txt
> ```
> <p align="right">💡 <b>تحذير:</b> يقوم بإلغاء التعديلات التي كتبتها في الملف ويعيده تماماً كما كان في آخر الالتزام (Commit).</p>

> [!CAUTION]
> ### <p align="right">⚠️ حذف ملف من تتبع المستودع</p>
> ```bash
> git rm --cached first-Base.txt
> ```
> <p align="right">💡 لإزالة ملف من التتبع مع الحفاظ على الملف في جهازك (لتفعيل ملف الـ gitignore عليه).</p>
