// Ẩn / Hiện menu mobile
document.getElementById("menu-btn").addEventListener("click", () => {
  alert("Menu mobile sẽ được thêm sau!");
});
  // Khi bấm vào logo → quay về trang chủ
  document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = 'login.html'; // hoặc đường dẫn đến trang chủ
  });

const tk = document.getElementById("openLoginBtn");
tk.addEventListener("click", () => {
  window.location.href = 'account/account.html';
});