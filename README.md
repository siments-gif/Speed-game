# Speed Game – Et reaksjonsklikkespill i React 🚀

Skoleprosjekt fra 2024 – Emne: JavaScript-rammeverk ved Gokstad Akademiet.

Et enkelt, men fullt funksjonelt reaksjonsspill laget for å øve på React-komponenter, hooks og state management. Klikk på figurer som dukker opp tilfeldig – positive gir poeng, negative trekker poeng. Tempoet øker gradvis, og høyeste score lagres i localStorage! 🎯

Spillet kjøres lokalt via Vite. (Ingen live demo enda, men superenkelt å starte!)

## Tech stack 🛠️

- **Frontend:** React (med hooks: useState, useEffect, useRef)
- **Bygg & verktøy:** Vite, npm, Git
- **Styling:** CSS Modules – enkel
- **Lagring:** Browser localStorage for highscore / lederbrett

## Hovedfunksjoner ✨

- Tilfeldige figurer (positive/negative) dukker opp på spillbrett
- Sanntids poeng- og tidstelling
- Dynamisk vanskelighetsgrad: raskere spawn, høyere poeng/færre feilmargin
- Intro-skjerm med navneinput + restart-mulighet
- Lederbrett med lagret highscore (localStorage)
- Komponentbasert struktur – lett å utvide (nye figurer eller effekter)

## Hva jeg lærte / viste fram 📚

- God bruk av React hooks for state og side-effekter
- Håndtering av tidtakere og intervaller uten memory leaks
- Enkel state management uten eksterne biblioteker
- Responsivt design og brukeropplevelse-fokus i et spill
- Strukturert kode med komponenter (GameBoard, Timer, Score, etc.)

## Installasjon og kjøring 🚀

```bash
# Klon repoet
git clone https://github.com/siments-gif/Speed-game.git
cd Speed-game

# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev
```
