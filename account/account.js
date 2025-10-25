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

        // Counter Animation
        function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current).toLocaleString();
                }, 16);
            });
        }

        // Profile form handling
        document.getElementById('profileForm').addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Thông tin cá nhân đã được cập nhật thành công!');
        });

        // Order filter functionality
        document.querySelectorAll('.order-filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all filter buttons
                document.querySelectorAll('.order-filter-btn').forEach(b => {
                    b.classList.remove('bg-orange-500', 'text-white');
                    b.classList.add('bg-gray-600', 'text-gray-300');
                });
                
                // Add active class to clicked button
                this.classList.add('bg-orange-500', 'text-white');
                this.classList.remove('bg-gray-600', 'text-gray-300');
                
                // Filter orders
                const status = this.getAttribute('data-status');
                const orders = document.querySelectorAll('.order-item');
                
                orders.forEach(order => {
                    if (status === 'all' || order.getAttribute('data-status') === status) {
                        order.style.display = 'block';
                    } else {
                        order.style.display = 'none';
                    }
                });
            });
        });

        // Address form functionality
        function showAddAddressForm() {
            document.getElementById('addAddressForm').classList.remove('hidden');
        }

        function hideAddAddressForm() {
            document.getElementById('addAddressForm').classList.add('hidden');
        }

        // Notification functionality
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.querySelector('p').textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Initialize counters when dashboard is visible
        document.addEventListener('DOMContentLoaded', () => {
            animateCounters();
        });
                  // Khi click vào logo, quay về trang chủ
  document.getElementById('logo').addEventListener('click', function() {
      window.location.href = '../login.html'; // hoặc '#home' nếu là cùng trang
  });
const log=document.getElementById('log');
log.addEventListener('click',function(){
    window.location.href='../index.html';
});
    document.getElementById("chuyen1").addEventListener("click", function() {
        // Chuyển trang khi bấm nút
        window.location.href = "../cart.html";
    });
        document.getElementById("chuyen").addEventListener("click", function() {
        // Chuyển trang khi bấm nút
        window.location.href = "../cart.html";
    });
        document.getElementById("chuyen2").addEventListener("click", function() {
        // Chuyển trang khi bấm nút
        window.location.href = "../cart.html";
    });