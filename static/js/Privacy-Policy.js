        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                menu.classList.add('hidden');
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        }

        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                const offset = 90;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }

        window.onload = () => {
            console.log('%c✅ English Privacy Policy Page Ready - Professional & Responsive', 'color:#0f766e; font-size:14px; font-family:Inter');
        };