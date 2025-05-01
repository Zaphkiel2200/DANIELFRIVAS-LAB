import { store } from "../store/store";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    store.subscribe(() => this.render());
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1>Votación Anime</h1>
      <button id="reset-btn">Reiniciar Votos</button>
      
      ${store.getFights().map(fight => `
        <div class="fight-pair">
          <character-card 
            fight-id="${fight.id}"
            character-num="1"
            name="${fight.character1.name}"
            image="${fight.character1.image}"
            series="${fight.character1.series}">
          </character-card>
          
          <span class="vs">
            VS (${fight.votes1} - ${fight.votes2})
          </span>
          
          <character-card
            fight-id="${fight.id}"
            character-num="2"
            name="${fight.character2.name}"
            image="${fight.character2.image}"
            series="${fight.character2.series}">
          </character-card>
        </div>
      `).join('')}
    `;

    this.querySelector('#reset-btn')?.addEventListener('click', () => store.resetVotes());
  }
}