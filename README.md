<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazM1MWN1b2l0a3dyY3lzM25wNmsyZjJpZTZmZnN4N3ltaGRhdDRqdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sU6FxZoKEn34nS3d0q/giphy.gif" alt="Running Button Demo" width="600"/>
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
> L'ostacolo? Il bottone stesso. Finché le credenziali sono errate, lui scapperà.  
> Inserisci i dati giusti per disattivare il suo protocollo di fuga.

---

## 🎨 ANALISI DELLA MINACCIA

| Indicatore Visivo | Livello di Minaccia | Comportamento del Bottone |
| :---------------: | :-----------------: | :------------------------ |
| 🟡 **Giallo**     | Basso              | Ti ignora… per ora.       |
| 🟠 **Arancione**   | Medio              | Sente la tua presenza.    |
| 🔴 **Rosso**       | **CRITICO**        | **PROTOCOLLO DI FUGA!**   |
| 🟢 **Verde Flash** | Evasione           | Si è appena spostato.     |

---

## 🛠️ ARCHITETTURA DEL SISTEMA

| Componente   | Ruolo                                           |
| ------------ | ---------------------------------------------- |
| `index.html` | **L'Arena** – struttura che contiene la sfida. |
| `styles.css` | **La Skin** – aspetto e feedback visivo.        |
| `script.js`  | **Il Cervello** – logica di fuga e di resa.     |

---

## ⚙️ HACKERARE IL SISTEMA (Configurazione)

Puoi alterare le sue direttive senza terminale: basta editare l’oggetto `CONFIG` all’inizio di **`script.js`**.

<details>
<summary>👉 Clicca per il codice di configurazione</summary>

```javascript
// Configurazione script.js
const CONFIG = {
  // Credenziali per il cessate-il-fuoco
  credentials: {
    email: 'test@test.com',
    password: 'password'
  },

  // Sensori di prossimità (in pixel)
  distances: {
    near:   100, // panico → fuga
    medium: 200  // allerta
  },

  // Classi CSS per gli stati
  buttonStates: {
    default: 'default',
    near:    'mouse-near',
    medium:  'medium-distance',
    far:     'far-distance',
    running: 'running'
  },

  // Durata del flash di trionfo (ms)
  animations: {
    runningDuration: 300
  }
};
