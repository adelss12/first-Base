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
    SAR: 3.75
};

const currencyNames = {
    USD: "دولار",
    SAR: "ريال"
};

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const conversionResult = document.getElementById("conversionResult");
const swapButton = document.getElementById("swapButton");

function convertCurrency() {
    const amount = Number(amountInput.value);

    if (!amount || amount < 0) {
        conversionResult.textContent = "0.00";
        return;
    }

    const convertedAmount =
        (amount / exchangeRates[fromCurrency.value]) *
        exchangeRates[toCurrency.value];

    conversionResult.textContent =
        `${convertedAmount.toFixed(2)} ${currencyNames[toCurrency.value]}`;
}

amountInput.addEventListener("input", convertCurrency);
fromCurrency.addEventListener("change", convertCurrency);
toCurrency.addEventListener("change", convertCurrency);

swapButton.addEventListener("click", function () {
    const currentFrom = fromCurrency.value;

    fromCurrency.value = toCurrency.value;
    toCurrency.value = currentFrom;

    convertCurrency();
});
