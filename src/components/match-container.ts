import { Match } from '../store/types';

export class MatchContainer extends HTMLElement {
  match: Match;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.match = JSON.parse(this.getAttribute('match') || '{}');
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        .match {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }
        .match h2 {
          text-align: center;
          color: #333;
          margin-top: 0;
        }
        .characters {
          display: flex;
          justify-content: space-around;
          margin-top: 15px;
        }
      </style>
      <div class="match">
        <h2>${this.match.character1.name} vs ${this.match.character2.name}</h2>
        <div class="characters">
          <character-card 
            character=${JSON.stringify(this.match.character1)}
            match-id=${this.match.id}>
          </character-card>
          <character-card 
            character=${JSON.stringify(this.match.character2)}
            match-id=${this.match.id}>
          </character-card>
        </div>
      </div>
    `;
  }
}

customElements.define('match-container', MatchContainer);