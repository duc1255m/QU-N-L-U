// =================== CẤU HÌNH BAN ĐẦU ===================
let currentQuantity = 1;
let currentPrice = 450000;
let cartCount = 0;

// =================== HÀM CHUYỂN TAB ===================
function showTab(tabName, event) {
  // Ẩn tất cả nội dung tab
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Bỏ active khỏi tất cả nút tab
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("bg-orange-500", "text-white");
    btn.classList.add("hover:bg-gray-700", "text-gray-300");
  });

  // Hiện tab được chọn
  const tab = document.getElementById(tabName);
  if (tab) tab.classList.add("active");

  // Kích hoạt màu nút được chọn
  if (event && event.target) {
    event.target.classList.add("bg-orange-500", "text-white");
    event.target.classList.remove("hover:bg-gray-700", "text-gray-300");
  }
}

// =================== CHỌN SIZE ===================
document.querySelectorAll(".size-option").forEach((option) => {
  option.addEventListener("click", function () {
    // Reset các size khác
    document.querySelectorAll(".size-option").forEach((opt) => {
      opt.classList.remove(
        "selected",
        "border-orange-500",
        "bg-orange-500",
        "bg-opacity-20"
      );
      opt.classList.add("border-gray-600");
    });

    // Thêm style cho size được chọn
    this.classList.add("selected", "border-orange-500", "bg-orange-500", "bg-opacity-20");
    this.classList.remove("border-gray-600");

    // Cập nhật giá
    currentPrice = parseInt(this.getAttribute("data-price")) || 0;
    updatePrice();
  });
});

// =================== CẬP NHẬT SỐ LƯỢNG ===================
const quantityDisplay = document.getElementById("quantity");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");

if (decreaseBtn && increaseBtn && quantityDisplay) {
  decreaseBtn.addEventListener("click", () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      updateQuantity();
    }
  });

  increaseBtn.addEventListener("click", () => {
    if (currentQuantity < 10) {
      currentQuantity++;
      updateQuantity();
    }
  });
}

function updateQuantity() {
  document.getElementById("quantity").textContent = currentQuantity;
}

// =================== CẬP NHẬT GIÁ ===================
function updatePrice() {
  const formattedPrice = currentPrice.toLocaleString("vi-VN") + "đ";
  const priceElement = document.getElementById("currentPrice");
  if (priceElement) priceElement.textContent = formattedPrice;
}

// =================== THÊM VÀO GIỎ HÀNG ===================
const addToCartBtn = document.getElementById("addToCartBtn");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", function () {
    cartCount += currentQuantity;
    document.getElementById("cartCount").textContent = cartCount;

    // Hiệu ứng nút giỏ hàng
    const cartBtn = document.getElementById("cartBtn");
    if (cartBtn) {
      cartBtn.classList.add("cart-animation");
      setTimeout(() => cartBtn.classList.remove("cart-animation"), 600);
    }

    // Thông báo thêm giỏ hàng
    showNotification(`Đã thêm ${currentQuantity} sản phẩm vào giỏ hàng!`);
  });
}

// =================== THÔNG BÁO ===================
function showNotification(message, type = "success") {
  const notification = document.getElementById("notification");
  if (!notification) return;

  const icon = notification.querySelector(".text-2xl");
  const title = notification.querySelector("h4");
  const text = notification.querySelector("p");

  if (type === "error") {
    icon.textContent = "❌";
    title.textContent = "Lỗi!";
  } else {
    icon.textContent = "✅";
    title.textContent = "Thành công!";
  }

  text.textContent = message;
  notification.classList.add("show");
  setTimeout(() => notification.classList.remove("show"), 3000);
}

// =================== ĐÁNH GIÁ SAO ===================
document.querySelectorAll(".rating-star").forEach((star) => {
  star.addEventListener("click", function () {
    const rating = parseInt(this.getAttribute("data-rating"));
    updateStars(rating);
  });
});

function updateStars(rating) {
  document.querySelectorAll(".rating-star").forEach((star, index) => {
    star.classList.toggle("active", index < rating);
  });
}

// =================== VIẾT ĐÁNH GIÁ ===================
function showWriteReview() {
  showNotification("Tính năng viết đánh giá sẽ được cập nhật sớm!", "info");
}

// =================== CHUYỂN TRANG ===================
document.addEventListener("DOMContentLoaded", () => {
  // Cập nhật giỏ hàng ban đầu
  const cartCountEl = document.getElementById("cartCount");
  if (cartCountEl) cartCountEl.textContent = cartCount;

  // Cuộn mượt khi click anchor
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Logo quay lại trang chủ
  const logo = document.getElementById("logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "../login.html";
    });
  }

  // Mở trang tài khoản
  const openLoginBtn = document.getElementById("openLoginBtn");
  if (openLoginBtn) {
    openLoginBtn.addEventListener("click", () => {
      window.location.href = "../account/account.html";
    });
  }
});
