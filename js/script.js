window.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");

    function toggleNavbar() {
        header.classList.toggle("sticky", window.scrollY > 0);
    }

    toggleNavbar();
    window.addEventListener("scroll", toggleNavbar);

    var eventContainer = document.querySelector(".eventContainer");
    var eventCards = document.querySelectorAll(".eventCard");
    var scrollSpeed = 1.75; // Adjust scroll speed as needed
    var scrollDelay = 10; // Adjust scroll delay as needed

    function scroll() {
        if (eventContainer.scrollLeft >= eventContainer.scrollWidth / 2) {
            eventContainer.scrollLeft -= eventContainer.scrollWidth / 2;
        } else {
            eventContainer.scrollLeft += scrollSpeed;
        }
    }

    var scrollInterval = setInterval(scroll, scrollDelay);

    eventContainer.addEventListener("mouseenter", function() {
        clearInterval(scrollInterval);
    });

    eventContainer.addEventListener("mouseleave", function() {
        scrollInterval = setInterval(scroll, scrollDelay);
    });

    // Clone and append event cards to create a seamless loop
    var cloneEventCards = Array.from(eventCards).map(function(card) {
        return card.cloneNode(true);
    });

    cloneEventCards.forEach(function(cloneCard) {
        eventContainer.appendChild(cloneCard);
    });

    // Function to translate the page content
    function translatePage(lang) {
        var elements = document.querySelectorAll('.translate');
        elements.forEach(function(element) {
            if (lang === 'en') {
                element.textContent = element.getAttribute('data-en');
            } else if (lang === 'ar') {
                element.textContent = element.getAttribute('data-ar');
            }
        });
    }

    // Event listener for language selection menu
    var languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        var selectedLang = languageSelect.value;
        translatePage(selectedLang);
    });
});
