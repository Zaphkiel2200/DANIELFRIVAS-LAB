export const fights = [
    // ===== PELEAS DE CHICAS ===== //
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
      }
    },
    {
      id: 'girls2',
      character1: {
        id: '3',
        name: 'Raphtalia',
        image: 'https://cdn.myanimelist.net/images/characters/8/379071.jpg',
        series: 'The Rising of the Shield Hero'
      },
      character2: {
        id: '4',
        name: 'Misaka Mikoto',
        image: 'https://cdn.myanimelist.net/images/characters/9/501972.jpg',
        series: 'A Certain Scientific Railgun'
      }
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
        series: 'Monogatari Series'
      }
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
      }
    },
  
    // ===== PELEAS DE CHICOS ===== //
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
      }
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
      }
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
      }
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
      }
    }
  ];
  
  export const initialVotes = fights.reduce((acc, fight) => {
    acc[fight.id] = { votes1: 0, votes2: 0 };
    return acc;
  }, {} as Record<string, { votes1: number; votes2: number }>);