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
└── js/
    └── script.js
```

## Funzionalità Bootstrap utilizzate

- Navbar responsive con bottone hamburger su schede ridotte
- Griglia a colonne per il layout
- Card per le operazioni
- Collapse per mostrare/nascondere il terminale
- Toast di avviso al caricamento della pagina
