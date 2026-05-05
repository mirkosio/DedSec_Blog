// Messaggio nella console del browser (visibile con F12)
document.addEventListener('DOMContentLoaded', function() {
    console.log("%c [DEDSEC] System Initialized... ", "color: #2dfc52; background: #000; font-weight: bold;");
    console.log("%c [INFO] Benvenuti all'ITIS Marconi - Gruppo 8 (Mirko & Mattia) ", "color: #00ffff;");
    console.log("%c [WARN] Connessione monitorata da ctOS. Attivare VPN. ", "color: #ff3c3c;");

    // Piccolo script per loggare il click sulle card
    var cards = document.querySelectorAll('.card-dedsec');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            console.log("Accessing encrypted node...");
        });
    });

    // Mostra il toast di avviso ctOS solo se esiste nella pagina
    // new bootstrap.Toast() è una classe di Bootstrap che gestisce i toast
    var toastEl = document.getElementById('toastCtOS');
    if (toastEl) {
        var toast = new bootstrap.Toast(toastEl, { delay: 4000 }); // scompare dopo 4 secondi
        toast.show();
    }
});
