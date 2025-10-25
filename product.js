let currentCategory = 'all';
let currentSearch = '';

// ---------------------------
// Lọc sản phẩm theo danh mục
// ---------------------------
function filterProducts(category, event) {
  currentCategory = category;
  applyFilters();

  // Cập nhật trạng thái nút
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active', 'text-white');
    btn.classList.add('text-gray-300');
  });

  event.target.classList.add('active', 'text-white');
  event.target.classList.remove('text-gray-300');
}

// ---------------------------
// Áp dụng lọc (theo danh mục + tìm kiếm)
// ---------------------------
function applyFilters() {
  const products = document.querySelectorAll('.product-item');
  const noResults = document.getElementById('noResults');
  let visibleCount = 0;

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    const productName = product.getAttribute('data-name').toLowerCase();

    const categoryMatch = currentCategory === 'all' || productCategory === currentCategory;
    const searchMatch = currentSearch === '' || productName.includes(currentSearch.toLowerCase());

    if (categoryMatch && searchMatch) {
      product.style.display = 'block';
      visibleCount++;
    } else {
      product.style.display = 'none';
    }
  });

  // Hiển thị / ẩn thông báo không có kết quả
  if (visibleCount === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
  }
}

// ---------------------------
// Khi trang đã tải xong
// ---------------------------
document.addEventListener('DOMContentLoaded', function() {
  // Xử lý tìm kiếm
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      currentSearch = e.target.value;
      applyFilters();
    });
  }

  // Nút lọc đầu tiên active
  const firstBtn = document.querySelector('.filter-btn');
  if (firstBtn) firstBtn.classList.add('active');

  // Khi click vào logo → quay lại trang chủ
  const logo = document.getElementById('logo');
  if (logo) {
    logo.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  // Khi click vào ảnh sản phẩm → chuyển sang trang chi tiết theo ID
  const products = document.querySelectorAll(".product-item");
  products.forEach(product => {
    const imageDiv = product.querySelector(".h-56"); // phần ảnh
    const productId = product.id; // Lấy id từ thuộc tính id của thẻ

    if (imageDiv) {
      imageDiv.style.cursor = "pointer";
      imageDiv.addEventListener("click", () => {
        // Chuyển đến trang chi tiết, gửi id sản phẩm qua URL
        window.location.href = `manager/${productId}.html`;
      });
    }
  });
});
