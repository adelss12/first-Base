// 1. نطلب من المستخدم إدخال اسمه
let userName = prompt("ما هو اسمك الكريم؟");

// 2. نبحث عن عنصر العنوان في الصفحة باستخدام الـ id الخاص به
let welcomeElement = document.getElementById("welcome-text");

// 3. نتحقق إذا كان المستخدم كتب اسماً بالفعل أو ضغط إلغاء
if (userName) {
    // إذا كتب اسمه، نغير نص العنوان ليرحب به
    welcomeElement.innerText = "أهلاً بك يا " + userName + " في موقعنا الممتع! 🎉";
} else {
    // إذا لم يكتب شيئاً، نضع ترحيباً عاماً
    welcomeElement.innerText = "أهلاً بك يا زائرنا العزيز في موقعنا! ✨";
}
