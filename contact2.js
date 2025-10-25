// Contact Form Handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
                alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
                return;
            }
            
            // Simulate form submission
            setTimeout(() => {
                // Hide form and show success message
                this.style.display = 'none';
                document.getElementById('successMessage').classList.add('active');
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    this.style.display = 'block';
                    this.reset();
                    document.getElementById('successMessage').classList.remove('active');
                }, 5000);
            }, 1000);
        });

        // Accordion functionality
        function toggleAccordion(index) {
            const content = document.getElementById(`content${index}`);
            const icon = document.getElementById(`icon${index}`);
            
            // Close all other accordions
            for (let i = 1; i <= 5; i++) {
                if (i !== index) {
                    document.getElementById(`content${i}`).classList.remove('active');
                    document.getElementById(`icon${i}`).textContent = '+';
                    document.getElementById(`icon${i}`).style.transform = 'rotate(0deg)';
                }
            }
            
            // Toggle current accordion
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                icon.textContent = '+';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('active');
                icon.textContent = '−';
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Chat widget functionality
        function toggleChat() {
            const chatBubble = document.getElementById('chatBubble');
            const chatToggle = document.getElementById('chatToggle');
            
            if (chatBubble.classList.contains('active')) {
                chatBubble.classList.remove('active');
                chatToggle.textContent = '💬';
            } else {
                chatBubble.classList.add('active');
                chatToggle.textContent = '✕';
            }
        }

        // Close chat when clicking outside
        document.addEventListener('click', function(e) {
            const chatWidget = document.querySelector('.chat-widget');
            const chatBubble = document.getElementById('chatBubble');
            const chatToggle = document.getElementById('chatToggle');
            
            if (!chatWidget.contains(e.target) && chatBubble.classList.contains('active')) {
                chatBubble.classList.remove('active');
                chatToggle.textContent = '💬';
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
