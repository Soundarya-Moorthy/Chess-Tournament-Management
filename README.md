# Chess Tournament Management System

A Chess Tournament Management System built using **Svelte + JavaScript** for managing chess players, tournaments, knockout matches, and rankings.

---

## Features

### Player Management
- Add Player
- Edit Player
- Delete Player
- Store player data using Local Storage

### Tournament Management
- Create Tournament
- Edit Tournament
- Delete Tournament
- Add existing players to tournaments
- Store tournament data using Local Storage

### Match System
- Generate knockout matches automatically
- Randomly pair players
- Automatically determine winners
- Record match results

### Rankings
- Display tournament champions
- Show final rankings (1st, 2nd, and 3rd place)

---

## Tech Stack

- Svelte
- JavaScript
- Vite
- Local Storage

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/chess-tournament-management.git
```

Go into the project

```bash
cd chess-tournament
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## Project Structure

```
src/
│
├── components/
│   ├── playerForm.svelte
│   ├── tournamentForm.svelte
│   ├── matchTable.svelte
│   └── rankingTable.svelte
│
├── lib/
│   ├── playerStore.js
│   ├── tournamentStore.js
│   └── matchStore.js 
│
├── App.svelte
└── app.css
```

---

## Git Commit History

The project follows the Angular Commit Message Convention.

Example commits:

- feat: create responsive chess tournament dashboard
- feat: implement player and tournament management
- feat: implement knockout match generation
- feat: add tournament rankings
- fix: update player management and tournament workflow

---

