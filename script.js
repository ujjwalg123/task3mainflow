
    document.addEventListener('DOMContentLoaded', () => {
        // Form validation
        const form = document.getElementById('contactForm');
        const formStatus = document.getElementById('formStatus');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const message = form.elements['message'].value;
            
            if (name && email && message) {
                formStatus.textContent = 'Thank you for your message!';
                formStatus.style.color = 'green';
                form.reset();
            } else {
                formStatus.textContent = 'Please fill out all fields.';
                formStatus.style.color = 'red';
            }
        });
    
        // Menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');
        
        menuToggle.addEventListener('click', () => {
            if (menu.style.display === 'block' || menu.style.display === '') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        });
    
        // Dynamic content
        const changeTextButton = document.getElementById('changeTextButton');
        const dynamicText = document.getElementById('dynamicText');
        
        changeTextButton.addEventListener('click', () => {
            dynamicText.textContent = 'The content has been changed!';
        });

        // Change background color
        const changeBgButton = document.getElementById('changeBackColor');
        changeBgButton.addEventListener('click', () => {
            const colors = ['#f4f4f9', '#cfe2f3', '#fde4cf', '#c2f0fc', '#d8bfd8'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        });
        
    });
    