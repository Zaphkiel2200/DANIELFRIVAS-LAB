import { Match } from '../store/types';

export class MatchContainer extends HTMLElement {
  private _match: Match = {
    id: '',
    character1: { id: '', name: '', image: '', series: '' },
    character2: { id: '', name: '', image: '', series: '' }
  };

  static get observedAttributes() {
    return ['match'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'match' && newValue) {
      this._match = JSON.parse(newValue);
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos aquí */
      </style>
      <div class="match">
        <h2>${this._match.character1.name} vs ${this._match.character2.name}</h2>
        <div class="characters">
          <character-card character='${JSON.stringify(this._match.character1)}' match-id='${this._match.id}'></character-card>
          <character-card character='${JSON.stringify(this._match.character2)}' match-id='${this._match.id}'></character-card>
        </div>
      </div>
    `;
  }
}

customElements.define('match-container', MatchContainer);