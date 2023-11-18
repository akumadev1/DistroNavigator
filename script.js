document.addEventListener('DOMContentLoaded', function () {
    // Pobierz referencje do elementów HTML
    var searchInput = document.querySelector('.search-bar input');
    var distroCards = document.querySelectorAll('.distro-cards .card');

    // Dodaj nasłuchiwacz zdarzenia "input" dla pola wyszukiwania
    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        // Iteruj przez karty dystrybucji i ukrywaj/pokazuj w zależności od zgodności
        distroCards.forEach(function (card) {
            var distroName = card.querySelector('h3').textContent.toLowerCase();
            var distroDescription = card.querySelector('p').textContent.toLowerCase();

            if (distroName.includes(searchTerm) || distroDescription.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

