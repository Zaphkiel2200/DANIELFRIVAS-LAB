import { fights, initialVotes } from '../data/characters';

type VoteState = Record<string, { votes1: number; votes2: number }>;

class VotingStore {
  private fights = fights;
  private votes: VoteState;
  private subscribers: (() => void)[] = [];

  constructor() {
    this.votes = JSON.parse(localStorage.getItem('votes') || JSON.stringify(initialVotes));
  }

  getFights() {
    return this.fights.map(fight => ({
      ...fight,
      votes1: this.votes[fight.id].votes1,
      votes2: this.votes[fight.id].votes2
    }));
  }

  vote(fightId: string, characterNumber: 1 | 2) {
    if (!this.votes[fightId]) return;

    if (characterNumber === 1) {
      this.votes[fightId].votes1++;
    } else {
      this.votes[fightId].votes2++;
    }

    this.save();
    this.notifySubscribers();
  }

  resetVotes() {
    this.votes = JSON.parse(JSON.stringify(initialVotes));
    this.save();
    this.notifySubscribers();
  }

  subscribe(callback: () => void) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    };
  }

  private save() {
    localStorage.setItem('votes', JSON.stringify(this.votes));
  }

  private notifySubscribers() {
    this.subscribers.forEach(callback => callback());
  }
}

export const store = new VotingStore();
