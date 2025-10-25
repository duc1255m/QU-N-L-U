        const openBtn = document.getElementById("openLoginBtn");
openBtn.addEventListener("click", () => {
    window.location.href = "account/account.html";
});
const ck=document.getElementById("ck");
ck.addEventListener("click",function(){
    alert("Cảm ơn bạn đã đặt hàng! Đơn hàng của bạn sẽ được xử lý trong thời gian sớm nhất.");
    window.location.href="checkout.html";
});
 let currentQuantity = 1;
        let currentPrice = 450000;
        let cartCount = 0;

        // Tab functionality
        function showTab(tabName) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all tab buttons
            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(btn => {
                btn.classList.remove('bg-orange-500', 'text-white');
                btn.classList.add('hover:bg-gray-700', 'text-gray-300');
            });
            
            // Show selected tab content
            document.getElementById(tabName).classList.add('active');
            
            // Add active class to clicked button
            event.target.classList.add('bg-orange-500', 'text-white');
            event.target.classList.remove('hover:bg-gray-700', 'text-gray-300');
        }

        // Size selection
        document.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                document.querySelectorAll('.size-option').forEach(opt => {
                    opt.classList.remove('selected', 'border-orange-500', 'bg-orange-500', 'bg-opacity-20');
                    opt.classList.add('border-gray-600');
                });
                
                // Add selected class to clicked option
                this.classList.add('selected', 'border-orange-500', 'bg-orange-500', 'bg-opacity-20');
                this.classList.remove('border-gray-600');
                
                // Update price
                currentPrice = parseInt(this.getAttribute('data-price'));
                updatePrice();
            });
        });

        // Quantity controls
        document.getElementById('decreaseBtn').addEventListener('click', function() {
            if (currentQuantity > 1) {
                currentQuantity--;
                updateQuantity();
            }
        });

        document.getElementById('increaseBtn').addEventListener('click', function() {
            if (currentQuantity < 10) {
                currentQuantity++;
                updateQuantity();
            }
        });

        function updateQuantity() {
            document.getElementById('quantity').textContent = currentQuantity;
        }

        function updatePrice() {
            const formattedPrice = currentPrice.toLocaleString('vi-VN') + 'đ';
            document.getElementById('currentPrice').textContent = formattedPrice;
        }

        // Add to cart
        document.getElementById('addToCartBtn').addEventListener('click', function() {
            cartCount += currentQuantity;
            document.getElementById('cartCount').textContent = cartCount;
            
            // Add animation to cart button
            const cartBtn = document.getElementById('cartBtn');
            cartBtn.classList.add('cart-animation');
            setTimeout(() => {
                cartBtn.classList.remove('cart-animation');
            }, 600);
            
            // Show notification
            showNotification('Đã thêm ' + currentQuantity + ' sản phẩm vào giỏ hàng!');
        });

        // Notification functionality
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            const icon = notification.querySelector('.text-2xl');
            const title = notification.querySelector('h4');
            const text = notification.querySelector('p');
            
            if (type === 'error') {
                icon.textContent = '❌';
                title.textContent = 'Lỗi!';
            } else {
                icon.textContent = '✅';
                title.textContent = 'Thành công!';
            }
            
            text.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Write review functionality
        function showWriteReview() {
            showNotification('Tính năng viết đánh giá sẽ được cập nhật sớm!', 'info');
        }

        // Rating stars functionality
        document.querySelectorAll('.rating-star').forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                updateStars(rating);
            });
        });

        function updateStars(rating) {
            document.querySelectorAll('.rating-star').forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Set initial cart count
            document.getElementById('cartCount').textContent = cartCount;
            
            // Add smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });