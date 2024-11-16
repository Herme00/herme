 // Click to copy functionality
 document.querySelectorAll('.color-item').forEach(item => {
    item.addEventListener('click', function() {
        const hexCode = this.querySelector('.color-hex').textContent;
        navigator.clipboard.writeText(hexCode);
        
        const colorName = this.querySelector('.color-name');
        const originalText = colorName.textContent;
        colorName.textContent = 'Copiado!';
        setTimeout(() => {
            colorName.textContent = originalText;
        }, 1000);
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Show initial page based on URL
const path = window.location.pathname;
if (path.includes('projetos')) {
    showPage('projetos-page');
} else if (path.includes('contato')) {
    showPage('contato-page');
} else {
    showPage('projetos-page'); // Default to projects page
}