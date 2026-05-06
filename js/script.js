document.addEventListener('DOMContentLoaded', function() {

    // ===== CONSOLE =====
    console.log("%c [DEDSEC] System Initialized... ", "color: #2dfc52; background: #000; font-weight: bold;");
    console.log("%c [INFO] Benvenuti all'ITIS Marconi - Gruppo 8 (Mirko & Mattia) ", "color: #00ffff;");
    console.log("%c [WARN] Connessione monitorata da ctOS. Attivare VPN. ", "color: #ff3c3c;");

    // ===== CLICK SULLE CARD =====
    var cards = document.querySelectorAll('.card-dedsec');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            console.log("Accessing encrypted node...");
        });
    });

    // ===== TOAST =====
    var toastEl = document.getElementById('toastCtOS');
    if (toastEl) {
        var toast = new bootstrap.Toast(toastEl, { delay: 4000 });
        toast.show();
    }

});
