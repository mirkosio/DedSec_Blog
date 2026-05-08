document.addEventListener('DOMContentLoaded', function() {

    console.log("%c [DEDSEC] System Initialized... ", "color: #2dfc52; background: #000; font-weight: bold;");
    console.log("%c [INFO] ITI Marconi Dalmine - Gruppo 8 (Mirko & Mattia) ", "color: #00ffff;");

    var cards = document.querySelectorAll('.card-dedsec');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            console.log("Accessing encrypted node...");
        });
    });

    var toastEl = document.getElementById('toastCtOS');
    if (toastEl) {
        var toast = new bootstrap.Toast(toastEl, { delay: 4000 });
        toast.show();
    }

});
