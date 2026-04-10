// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";

  if (isDark) {
    document.body.classList.add("dark");
    document.getElementById("darkBtn").innerText = "☀️";
  }
});

// زر التبديل
function toggleDarkMode() {
  const body = document.body;

  // إضافة أو إزالة الكلاس
  body.classList.toggle("dark");

  // معرفة الوضع الحالي
  const isDark = body.classList.contains("dark");

  // حفظ في localStorage
  localStorage.setItem("darkMode", isDark);

  // تغيير الأيقونة
  document.getElementById("darkBtn").innerText = isDark ? "☀️" : "🌙";
}