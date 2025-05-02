import { AppState, Action, Match } from './types';

class Store {
  private state: AppState;
  private listeners: (() => void)[] = [];

  constructor(initialState: AppState) {
    this.state = initialState;
  }

  getState(): AppState {
    return this.state;
  }

  dispatch(action: Action): void {
    switch (action.type) {
      case 'INIT':
        this.state = { matches: action.payload };
        break;
      case 'VOTE':
        this.state = {
          matches: this.state.matches.map(match => {
            if (match.id === action.payload.matchId) {
              if (match.character1.id === action.payload.characterId) {
                return { ...match, votes1: (match.votes1 || 0) + 1 };
              } else if (match.character2.id === action.payload.characterId) {
                return { ...match, votes2: (match.votes2 || 0) + 1 };
              }
            }
            return match;
          })
        };
        break;
      default:
        break;
    }
    this.notifyListeners();
  }

  subscribe(listener: () => void): void {
    this.listeners.push(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }
}

export const store = new Store({ matches: [] });