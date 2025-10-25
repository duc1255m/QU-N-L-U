  // Counter Animation
        function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
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

        // Intersection Observer for counter animation
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe the statistics section
        document.addEventListener('DOMContentLoaded', () => {
            const statsSection = document.querySelector('.counter').closest('section');
            observer.observe(statsSection);
        });

        // Lightbox functionality
        function openLightbox(emoji, title) {
            document.getElementById('lightboxEmoji').textContent = emoji;
            document.getElementById('lightboxTitle').textContent = title;
            document.getElementById('lightbox').classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
        }

        // Close lightbox with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
          // Khi click vào logo, quay về trang chủ
  document.getElementById('logo').addEventListener('click', function() {
      window.location.href = 'login.html'; // hoặc '#home' nếu là cùng trang
  });
    const tk = document.getElementById("openLoginBtn");
tk.addEventListener("click", () => {
  window.location.href = 'account/account.html';
});