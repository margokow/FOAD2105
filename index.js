/* thème sombre */

    // Fonction pour basculer entre les thèmes sombre et clair
document.getElementById('toggle-btn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Liste des éléments à basculer entre les classes de thème
    let elementsToToggle = document.querySelectorAll('nav, button, h1, a, img, .accordion-header, .accordion-content, .burger-menu, .mobile-nav');
    elementsToToggle.forEach(function(element) {
        element.classList.toggle('dark-mode');
        element.classList.toggle('light-mode');
    });
});

/* faq accordéon*/

    // Fonction pour gérer le comportement de l'accordéon
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling; // Contenu associé à l'en-tête cliqué
        header.classList.toggle('active'); // Bascule la classe active pour l'en-tête

        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Ferme le contenu si déjà ouvert
        } else {
            // Ferme tous les autres contenus
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            // Ouvre le contenu associé à l'en-tête cliqué
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

/*menu burger*/

    // Fonction pour gérer le menu burger
document.getElementById('burger-menu').addEventListener('click', function(event) {
    event.stopPropagation(); // Empêche la propagation de l'événement de clic
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('show'); // Bascule l'affichage du menu mobile
});

    // Fonction pour fermer le menu mobile si clic en dehors
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobile-nav');
    const burgerMenu = document.getElementById('burger-menu');
    
        // Vérifie si le clic est en dehors du menu mobile et du burger menu
    if (!mobileNav.contains(event.target) && !burgerMenu.contains(event.target)) {
        mobileNav.classList.remove('show'); // Ferme le menu mobile
    }
});