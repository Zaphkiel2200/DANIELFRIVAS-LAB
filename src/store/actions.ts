export const vote = (characterId: string) => ({
    type: 'VOTE',
    payload: { characterId },
  });