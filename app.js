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

const exchangeRates = {
    USD: 1,
    SAR: 3.75,
    EUR: 0.92,
    AED: 3.6725,
    GBP: 0.79
};

const currencyNames = {
    USD: "دولار",
    SAR: "ريال",
    EUR: "يورو",
    AED: "درهم",
    GBP: "جنيه"
};

const convertButton = document.getElementById("convertButton");

if (convertButton) {
    convertButton.addEventListener("click", function () {
        const amount = Number(document.getElementById("amount").value);
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;
        const result = document.getElementById("conversionResult");

        if (!amount || amount < 0) {
            result.textContent = "أدخل مبلغًا صحيحًا أولًا";
            return;
        }

        const convertedAmount =
            (amount / exchangeRates[fromCurrency]) *
            exchangeRates[toCurrency];

        result.textContent =
            `${amount} ${currencyNames[fromCurrency]} = ` +
            `${convertedAmount.toFixed(2)} ${currencyNames[toCurrency]}`;
    });
}
