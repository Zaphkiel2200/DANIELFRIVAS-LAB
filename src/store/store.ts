import { AppState, Fight, Character } from '../models/types';

const initialState: AppState = {
  fights: [
                //  Peleas de las waifus
    {
      id: 'girls1',
      character1: { 
        id: '1', 
        name: 'Emilia', 
        image: 'https://cdn.myanimelist.net/images/characters/9/310307.jpg',
        series: 'Re:Zero' 
      },
      character2: { 
        id: '2', 
        name: 'Kurumi Tokisaki', 
        image: 'https://cdn.myanimelist.net/images/characters/6/284121.jpg',
        series: 'Date a Live' 
      },
      votes1: 0,
      votes2: 0
    },
    {
      id: 'girls2',
      character1: { 
        id: '3', 
        name: 'Raphtalia', 
        image: 'https://cdn.myanimelist.net/images/characters/8/379071.jpg',
        series: 'Shield Hero' 
      },
      character2: { 
        id: '4', 
        name: 'Misaka Mikoto', 
        image: 'https://cdn.myanimelist.net/images/characters/9/501972.jpg',
        series: 'Railgun' 
      },
      votes1: 0,
      votes2: 0
    },
    {
      id: 'girls3',
      character1: { 
        id: '5', 
        name: 'Roxy Migurdia', 
        image: 'https://cdn.myanimelist.net/images/characters/8/427392.jpg',
        series: 'Mushoku Tensei' 
      },
      character2: { 
        id: '6', 
        name: 'Sengoku Nadeko', 
        image: 'https://cdn.myanimelist.net/images/characters/7/440983.jpg',
        series: 'Monogatari' 
      },
      votes1: 0,
      votes2: 0
    },
    {
      id: 'girls4',
      character1: { 
        id: '7', 
        name: 'Rin Tohsaka', 
        image: 'https://cdn.myanimelist.net/images/characters/8/288917.jpg',
        series: 'Fate/stay night' 
      },
      character2: { 
        id: '8', 
        name: 'Makima', 
        image: 'https://cdn.myanimelist.net/images/characters/6/503574.jpg',
        series: 'Chainsaw Man' 
      },
      votes1: 0,
      votes2: 0
    },

                 //  Peleas d los husbandos
    {
      id: 'boys1',
      character1: { 
        id: '9', 
        name: 'Lelouch Lamperouge', 
        image: 'https://cdn.myanimelist.net/images/characters/2/293022.jpg',
        series: 'Code Geass' 
      },
      character2: { 
        id: '10', 
        name: 'Takakura Ken', 
        image: 'https://cdn.myanimelist.net/images/characters/16/501234.jpg',
        series: 'Dandadan' 
      },
      votes1: 0,
      votes2: 0
    },
    {
      id: 'boys2',
      character1: { 
        id: '11', 
        name: 'Levi Ackerman', 
        image: 'https://cdn.myanimelist.net/images/characters/9/307625.jpg',
        series: 'Attack on Titan' 
      },
      character2: { 
        id: '12', 
        name: 'Gojo Satoru', 
        image: 'https://cdn.myanimelist.net/images/characters/9/427937.jpg',
        series: 'Jujutsu Kaisen' 
      },
      votes1: 0,
      votes2: 0
    },
    {
      id: 'boys3',
      character1: { 
        id: '13', 
        name: 'Itachi Uchiha', 
        image: 'https://cdn.myanimelist.net/images/characters/9/284831.jpg',
        series: 'Naruto' 
      },
      character2: { 
        id: '14', 
        name: 'Spike Spiegel', 
        image: 'https://cdn.myanimelist.net/images/characters/16/280936.jpg',
        series: 'Cowboy Bebop' 
      },
      votes1: 0,
      votes2: 0
    },
    {
      id: 'boys4',
      character1: { 
        id: '15', 
        name: 'Light Yagami', 
        image: 'https://cdn.myanimelist.net/images/characters/8/474161.jpg',
        series: 'Death Note' 
      },
      character2: { 
        id: '16', 
        name: 'Guts', 
        image: 'https://cdn.myanimelist.net/images/characters/16/280936.jpg',
        series: 'Berserk' 
      },
      votes1: 0,
      votes2: 0
    }
  ]
};

class Store {
  private state: AppState;
  private subscribers: (() => void)[] = [];

  constructor(initialState: AppState) {
    this.state = initialState;
  }

  getState(): AppState {
    return this.state;
  }

  dispatch(action: { type: string; payload: any }): void {
    switch (action.type) {
      case 'VOTE':
        this.state = {
          ...this.state,
          fights: this.state.fights.map(fight => {
            if (fight.character1.id === action.payload.characterId) {
              return { ...fight, votes1: fight.votes1 + 1 };
            } else if (fight.character2.id === action.payload.characterId) {
              return { ...fight, votes2: fight.votes2 + 1 };
            }
            return fight;
          }),
        };
        this.notifySubscribers();
        break;
    }
  }

  subscribe(callback: () => void): void {
    this.subscribers.push(callback);
  }

  private notifySubscribers(): void {
    this.subscribers.forEach(callback => callback());
  }
}

export const store = new Store(initialState);