# Speed Game – A reaction click game in React 🚀

School project from 2024 – Course: JavaScript Frameworks at Gokstad Akademiet.

A simple but fully functional reaction game made to practice React components, hooks and state management. Click on shapes that appear randomly, positive ones give points, negative ones deduct points. The pace increases gradually, and your highest score is saved in localStorage! 🎯

The game runs locally with Vite. (No live demo yet, but super easy to start!)

## Tech stack 🛠️

- **Frontend:** ReactJS (with hooks: useState and useEffect)
- **Build & tools:** Vite, npm, Git
- **Styling:** CSS Modules
- **Storage:** Browser localStorage for highscore / leaderboard

## Main features ✨

- Random shapes (positive/negative) appear on the game board
- Real time score and timer
- Dynamic difficulty: faster spawns, higher points / less margin for error
- Intro screen with name input + restart option
- Leaderboard with saved highscore (localStorage)
- Component based structure, easy to extend (new shapes or effects)

## What I learned / demonstrated 📚

- Good use of React hooks for state and side effects
- Handling timers and intervals without memory leaks
- Simple state management without external libraries
- Responsive design and user experience focus in a game
- Structured code with components (GameBoard, Timer, Score, etc.)

## Installation and setup 🚀

```bash
# Clone the repo
git clone https://github.com/siments-gif/Speed-game.git
cd Speed-game

# Install dependencies
npm install

# Start development server
npm run dev
```
