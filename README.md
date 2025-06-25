<p align="center">
  <img src="https://i.giphy.com/media/duzpaTbCUy9Vu/giphy.gif" alt="Running Button Demo" width="600"/>
</p>

<h1 align="center">🚀 FUGITIVE LOGIN 🚀</h1>

<p align="center"><em>Un login che ha deciso che non vuole più lavorare.</em></p>

<p align="center">
  <img src="https://img.shields.io/badge/status-complete-brightgreen?style=for-the-badge" alt="Status: Complete">
  <img src="https://img.shields.io/badge/tech-JS%20|%20HTML%20|%20CSS-blueviolet?style=for-the-badge" alt="Tech Stack">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License: MIT">
</p>

---

## 🎯 LA MISSIONE
> Il tuo obiettivo, se decidi di accettarlo, è semplice: **effettuare il login**.  
> L’ostacolo? Il bottone stesso. Finché le credenziali sono errate, lui scapperà.  
> Inserisci i dati giusti per disattivare il suo protocollo di fuga.

---

## 🎨 ANALISI DELLA MINACCIA

| Indicatore Visivo | Livello | Comportamento del Bottone |
| :---------------: | :----: | ------------------------- |
| 🟡 **Giallo**     | Basso  | Ti ignora… per ora.       |
| 🟠 **Arancione**  | Medio  | Avverte la tua presenza.  |
| 🔴 **Rosso**      | Alto   | **Protocollo di fuga!**   |
| 🟢 **Verde Flash**| Evaso  | Si è appena spostato.     |

---

## 🛠️ ARCHITETTURA

| File          | Ruolo                                               |
| ------------- | --------------------------------------------------- |
| `index.html`  | **Arena** – struttura che contiene la sfida.        |
| `styles.css`  | **Skin** – aspetto e feedback visivo.               |
| `script.js`   | **Cervello** – logica di fuga, validazione, resa.   |

---

## ⚙️ HACKERARE IL SISTEMA (Configurazione)

Puoi personalizzare il comportamento modificando l’oggetto `CONFIG` all’inizio di **`script.js`**.

<details>
<summary>👉 Mostra configurazione</summary>

```javascript
// Configurazione script.js
const CONFIG = {
  // Credenziali per fermare la fuga
  credentials: {
    email: 'test@test.com',
    password: 'password'
  },

  // Sensori di prossimità (pixel)
  distances: {
    near:   100, // panico → fuga
    medium: 200  // allerta intermedia
  },

  // Classi CSS per gli stati
  buttonStates: {
    default: 'default',
    near:    'mouse-near',
    medium:  'medium-distance',
    far:     'far-distance',
    running: 'running'
  },

  // Durata del flash di successo (ms)
  animations: {
    runningDuration: 300
  }
};
```
</details>
[Prendimi](https://alexinfotech.github.io/LogPrendimi/)
