// Ẩn / Hiện menu mobile
document.getElementById("menu-btn").addEventListener("click", () => {
  alert("Menu mobile sẽ được thêm sau!");
});
  // Khi bấm vào logo → quay về trang chủ
  document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'index.html'; // hoặc đường dẫn đến trang chủ
  });

// Lấy phần tử
const openBtn = document.getElementById("openLoginBtn");
const popupLogin = document.getElementById("loginPopup");
const popupForgot = document.getElementById("forgotPopup");
const overlay = document.getElementById("overlay");
const closeLogin = document.getElementById("closePopup");
const closeForgot = document.getElementById("closeForgot");
const forgotLink = document.getElementById("forgotLink");
const backToLogin = document.getElementById("backToLogin");

// Mở đăng nhập
openBtn.addEventListener("click", () => {
  popupLogin.style.display = "block";
  overlay.style.display = "block";
});

// Đóng đăng nhập
closeLogin.addEventListener("click", () => {
  popupLogin.style.display = "none";
  overlay.style.display = "none";
});

// Overlay click ẩn popup
overlay.addEventListener("click", () => {
  popupLogin.style.display = "none";
  popupForgot.style.display = "none";
  overlay.style.display = "none";
});

// Mở popup quên mật khẩu
forgotLink.addEventListener("click", (e) => {
  e.preventDefault();
  popupLogin.style.display = "none";
  popupForgot.style.display = "block";
});

// Đóng popup quên mật khẩu
closeForgot.addEventListener("click", () => {
  popupForgot.style.display = "none";
  overlay.style.display = "none";
});

// Quay lại đăng nhập
backToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  popupForgot.style.display = "none";
  popupLogin.style.display = "block";
});

// Xử lý form đăng nhập
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Đăng nhập thành công! (Demo)");
  const url = `login.html`;
  window.location.href = url;
  popupLogin.style.display = "none";
  overlay.style.display = "none";
});

// Xử lý form quên mật khẩu
document.getElementById("forgotForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Liên kết đặt lại mật khẩu đã được gửi tới email của bạn! (Demo)");
  popupForgot.style.display = "none";
  overlay.style.display = "none";
});