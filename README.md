# DedSec Blog

Sito web tipo 2 (blog tematico) a tema **Watch Dogs 2** del videogioco, realizzato per il progetto di TPS.  
Simula il blog dell'organizzazione hacker fittizia **DedSec**, con  operazioni, leak e reclutamento finti.

**Gruppo 8**  
Gagu Mirko & Casali Mattia

---

## Pagine

| File | Contenuto |
|---|---|
| `index.html` | Home con messaggio prioritario e info connessione |
| `blog.html` | Archivio delle operazioni DedSec |
| `post.html` | Dettaglio leak con simulazione terminale |
| `join.html` | Form di reclutamento anonimo |
| `about.html` | Chi siamo, principi e membri della cellula |
| `css/style.css` | Stile personalizzato del sito |
| `js/script.js` | Console log, click sulle card, avvio toast |

## Linguaggi/Framework utilizzati

- HTML5 / CSS3
- [Bootstrap 5.3](https://getbootstrap.com/) — griglia, navbar, card, form, toast
- JavaScript vanilla — toast e interazioni

## Struttura

```
DedSec/
├── index.html
├── blog.html
├── post.html
├── join.html
├── about.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── Wallpaper.jpg
    ├── Wallpaper 2.jpg
    ├── Wallpaper 3.jpg
    ├── bg/
    │   ├── DedSec Logo.png
    │   ├── Marcus Holloway.jpg
    │   ├── Sitara Dhawan.jpg
    │   ├── Josh Sauchak.jpg
    │   └── Wrench.jpg
    └── no bg/
        ├── DedSec Logo.png
        ├── Marcus Holloway.png
        ├── Sitara Dhawan.png
        ├── Josh Sauchak.png
        └── Wrench.png
```

## Funzionalità Bootstrap utilizzate

- Navbar responsive con bottone hamburger su schede ridotte
- Griglia a colonne per il layout
- Card per le operazioni
- Collapse per mostrare/nascondere il terminale
- Toast di avviso al caricamento della pagina

## Immagini

- Logo DedSec — header di `index.html` e `about.html`, quadrato centrale di `about.html`
- Foto dei membri (Marcus, Sitara, Josh, Wrench) — card in `about.html`, versioni senza sfondo (PNG)
- Wallpaper — sfondo degli header di `index.html`, `blog.html` e `about.html` con overlay scuro semitrasparente

## Font

Font `Source Code Pro` importato da Google Fonts — monospace, usato in editor di codice, dà l'aspetto da terminale.
