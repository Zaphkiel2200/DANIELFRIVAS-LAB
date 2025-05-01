export interface Character {
    id: string;
    name: string;
    image: string;
    series: string;
  }
  
  export interface Fight {
    id: string;
    character1: Character;
    character2: Character;
    votes1: number;
    votes2: number;
  }
  
  export type VoteAction = 
    | { type: 'VOTE'; payload: { fightId: string; character: 1 | 2 } }
    | { type: 'RESET' };