function createGame(player1, time, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
        <strong>${time}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay:${delay}">
      <h2>${date} <span>${day}</span></h2>
      <ul>
         ${games} 
      </ul>
    </div> 
  `
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo" />
  </header>
  <main class="cards">
    ${createCard(
      "24/11",
      "Quinta",
      createGame("brasil", "16:00", "serbia") +
        createGame("portugal", "13:00", "gana") +
        createGame("suica", "7:00", "caron")
    )} 
    ${createCard(
      "28/11",
      "Segunda",
      createGame("southKorea", "10:00", "gana") +
        createGame("brasil", "13:00", "suica") +
        createGame("portugal", "16:00", "uruguay")
    )}
  </main>
`
