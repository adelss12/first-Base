# 📘 المرجع السريع لأوامر Git الأساسية

---

## 🔷 1. الأوامر الأولية لإنشاء مشروع جديد (من الصفر)
*تُنفذ هذه المجموعة بالترتيب **مرة واحدة فقط** عند ربط مجلدك المحلي بمستودع GitHub جديد.*

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git init</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لتهيئة المجلد الحالي كمستودع Git محلي.

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git add .</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لتجهيز جميع ملفات المشروع الحالية لبدء تتبعها (سيقرأ ملف .gitignore تلقائياً).

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git commit -m "Initial commit"</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لحفظ أول لقطة للمشروع في الذاكرة المحلية.

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git branch -M main</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لتسمية الفرع الرئيسي بـ main ليتطابق مع النظام الافتراضي لـ GitHub.

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git remote add origin https://github.com</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لربط مجلدك المحلي برابط مستودعك على السيرفر (استبدل الرابط برابط مستودعك الخاص).

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git push -u origin main</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لرفع الملفات أول مرة وتثبيت الفرع كافتراضي للمستقبل.

---

## 🔷 2. مقارنة الملفات ومعرفة حالة المشروع (قبل التجهيز والرفع)
*تُاستخدم لمراقبة التعديلات والتأكد من الملفات قبل حفظها.*

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git status</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 يوضح لك الملفات المعدلة، الجديدة، والتي لم يتم تتبعها بعد.

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git diff</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 يظهر التغييرات الدقيقة والأسطر المضافة/المحذوفة في الكود قبل عمل add.

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git diff --staged</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لمقارنة الملفات التي عملت لها add بالفعل للتأكد منها قبل الـ Commit النهائي.

---

## 🔷 3. رفع ملف جديد أو ملف واحد محدث (إلى مشروع قائم)

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git add first-Base.txt</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لتجهيز هذا الملف تحديداً (قم بتغيير اسم الملف حسب حاجتك).

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git commit -m "Update specific file"</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لحفظ التعديل الخاص بهذا الملف محلياً.

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git push</code></td>
    <td width="30%" align="center" bgcolor="#2ecc71"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 للرفع المباشر إلى السيرفر (يعمل مباشرة بفضل اختصار -u السابق).

---

## 🔷 4. أوامر التراجع وإلغاء الأخطاء (مجموعة الطوارئ)

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git restore --staged first-Base.txt</code></td>
    <td width="30%" align="center" bgcolor="#e74c3c"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 إذا عملت git add لملف بالخطأ، هذا الأمر يخرجه من التجهيز ويعيده لحالته السابقة دون حذف كودك.

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git restore first-Base.txt</code></td>
    <td width="30%" align="center" bgcolor="#e74c3c"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 ⚠️ تحذير: يقوم بإلغاء التعديلات التي كتبتها في الملف ويعيده تماماً كما كان في آخر الالتزام (Commit).

<table>
  <tr>
    <td width="70%" bgcolor="#282c34"><code>git rm --cached first-Base.txt</code></td>
    <td width="30%" align="center" bgcolor="#e74c3c"><b>📋 قابل للنسخ</b></td>
  </tr>
</table>
💡 لإزالة ملف من التتبع مع الحفاظ على الملف في جهازك (لتفعيل ملف الـ gitignore عليه).
