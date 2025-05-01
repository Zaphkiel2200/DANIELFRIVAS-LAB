import { Character } from '../models/types';

const ANIME_IDS = {
  RE_ZERO: 31240,       
  DATE_A_LIVE: 15583,   
  DANDADAN: 51314,      
};

export async function fetchCharacters(animeId: number): Promise<Character[]> {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`);
    const data = await response.json();
    return data.data
      .filter((char: any) => char.role === 'Main')
      .map((char: any) => ({
        id: char.character.mal_id.toString(),
        name: char.character.name,
        image: char.character.images.jpg.image_url,
        series: 'Nombre del anime', 
      }));
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
}

// Ejemplo: Obtener personajes de Dandadan (Takakura Ken)
export async function initDandadanCharacters(): Promise<void> {
  const characters = await fetchCharacters(ANIME_IDS.DANDADAN);
  console.log('Personajes de Dandadan:', characters); // Verifica que Takakura Ken esté en la lista
}