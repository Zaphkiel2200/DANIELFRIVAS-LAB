export interface Character {
  id: string;
  name: string;
  image: string;
  series: string;
}

export interface Match {
  id: string;
  character1: Character;
  character2: Character;
  votes1?: number;
  votes2?: number;
}

export interface AppState {
  matches: Match[];
}

export type Action = 
  | { type: 'VOTE'; payload: { matchId: string; characterId: string } }
  | { type: 'INIT'; payload: Match[] };
