import { store } from '../store/store';
class CharacterCard extends HTMLElement {
    character = {
        name: '',
        image: '',
        series: ''
    };
    constructor() {
        super();
        this.handleVote = this.handleVote.bind(this);
    }
    connectedCallback() {
        this.character = {
            name: this.getAttribute('name') || 'Unknown',
            image: this.getAttribute('image') || 'default-image.jpg',
            series: this.getAttribute('series') || 'Unknown series'
        };
        this.render();
        this.addEventListener('click', this.handleVote);
    }
    disconnectedCallback() {
        this.removeEventListener('click', this.handleVote);
    }
    handleVote() {
        const fightId = this.getAttribute('fight-id');
        const characterNum = this.getAttribute('character-num');
        if (fightId && characterNum) {
            store.vote(fightId, characterNum === '1' ? 1 : 2);
        }
    }
    render() {
        this.innerHTML = `
      <div class="character-card">
        <img src="${this.character.image}" 
             alt="${this.character.name}" 
             onerror="this.src='fallback-image.jpg'">
        <div class="character-info">
          <h3>${this.character.name}</h3>
          <p>${this.character.series}</p>
        </div>
      </div>
    `;
    }
}
customElements.define('character-card', CharacterCard);
