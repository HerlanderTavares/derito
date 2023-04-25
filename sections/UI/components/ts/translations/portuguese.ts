/****************************************
     NAVIGATION
****************************************/
export const navLinks = [
  ['Bem-Vindo', 'welcome'],
  ['Minha Musica', 'music'],
  ['Meus Albuns', 'albums'],
  ['Minha Caminhada', 'journey'],
  ['Galeria', 'gallery'],
];

export const subtitle = 'Músico & Compositor';

/****************************************
     MUSIC
****************************************/
export const music = {
  semba: `África é um continente repleto de culturas e estilos musicais diferentes, mas eu aderi aos estilos mais proeminentes do meu país natal, Angola, como Kilapanga, Rumba, Cumbia, Merengue e nosso mais conhecido, Semba.`,
  afrojazz: `Afrojazz é uma fusão entre música africana e jazz. Foi uma progressão natural para mim, ao adicionar acordes e concepções de Jazz às minhas músicas. A complexidade do Jazz trouxe outro sabor ao meu trabalho e revelou novas possibilidades.`,
  afrobossa: {
    description: `AfroBossa é uma fusão entre a Bossa Nova e a Música Africana. A Bossa Nova é derivado do Samba, um estilo Brasileiro com raízes em África, raízes que foram levadas para o Brasil durante a escravatura entre os séculos 16 e 19. Criei este estilo com o objetivo de trazer essas raízes de volta para a música brasileira.`,
    button: 'Saiba Mais',
  },
};

/****************************************
     ALBUMS
****************************************/
export const albums = {
  button: 'Ouvir Album',
  prompts: ['Album Anterior', 'Album Seguinte'],
  covers: [
    {
      title: 'saudade',
      description: `"Saudade" foi o meu primeiro álbum, lançado em Julho de 1995, tendo sido o mais vendido em Angola naquela altura, onde sou lembrado e me tornei conhecido pelos grandes sucessos que se tornaram clássicos da música angolana. "Saudade", foi feito pela vivência da minha infância e adolescência em Benguela. Por causa da guerra em curso, em 1982 tive que deixar família e amigos para trás aos 16 anos de idade, com o principal objetivo de tirar um curso superior sem interrupções.`,
      svg: 'city-luanda.svg',
      platforms: [
        {
          name: 'spotify',
          link: `https://open.spotify.com/album/6fo8gnrWMG1HMTmn4RDCfD?referral=labelaffiliate&utm_source=1101lvUyfuyI&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
        },
        {
          name: 'apple',
          link: `https://music.apple.com/us/album/saudade/1595385794?uo=4`,
        },
        {
          name: 'amazon',
          link: `https://www.amazon.com/gp/product/B09LSR2G9G`,
        },
        {
          name: 'deezer',
          link: `https://www.deezer.com/en/album/253639922`,
        },
      ],
    },
    {
      title: 'alison',
      description: `O segundo álbum "Álison" foi lançado em Outubro de 1996. O vídeo do grande sucesso "Intumba" foi nomeado "o melhor vídeo-clip do ano" em 1997. Este álbum é muito requisitado até aos dias de hoje, por isso tenho reconsiderado a sua re-edição. "Álison" é o nome do meu primogénito a quem dediquei o disco, por ter sido pai solteiro. O grande sucesso deste álbum tem o seu próprio nome que fala da nossa história a dois.`,
      platforms: [
        {
          name: 'spotify',
          link: `https://open.spotify.com/album/3cvhEM9JrQSlmFzzlBUoGD?referral=labelaffiliate&utm_source=1100lvUfs3Pn&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
        },
        {
          name: 'apple',
          link: `https://music.apple.com/us/album/%C3%A1lison/1595389801?uo=4`,
        },
        {
          name: 'amazon',
          link: `https://www.amazon.com/gp/product/B09LSR2CQC`,
        },
        {
          name: 'deezer',
          link: `https://open.spotify.com/album/3cvhEM9JrQSlmFzzlBUoGD?referral=labelaffiliate&utm_source=1100lvUfs3Pn&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
        },
      ],
    },
    {
      title: 'discernimento',
      description: `"Discernimento" foi lançado em Junho de 2004. Este foi o meu trabalho mais difícil até agora, um projeto de 4 anos, desde a composição até a gravação e o lançamento. Neste álbum, reuni alguns nomes de prestígio no mundo da música, cada um no seu próprio país. Foi um grande e fascinante desafio que me apresentou ao mundo do Afrojazz, onde me pretendo expandir no futuro imediato.`,
      platforms: [
        {
          name: 'spotify',
          link: `https://open.spotify.com/album/5Mtuq8olBMSvTZUbj95f0m?referral=labelaffiliate&utm_source=1100lvUfsntK&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
        },
        {
          name: 'apple',
          link: `https://music.apple.com/us/album/discernimento-1/1597831242?uo=4`,
        },
        {
          name: 'amazon',
          link: `https://www.amazon.com/gp/product/B09MR8YYMD`,
        },
        {
          name: 'deezer',
          link: `https://www.deezer.com/en/album/276362062`,
        },
      ],
    },
    {
      title: 'best of',
      description: `"Best Of" foi lançado em Dezembro de 2016, 12 anos depois do meu último disco, pois durante esse período estive envolvido em eventos e produções musicais de outros artistas. Então, para reiniciar minha carreira discográfica e reaparecer no mercado, fiz uma coleção de músicas dos meus álbuns muito solicitados, que foram refeitas com recurso aos membros do grupo musical "Kassav".`,
      platforms: [
        {
          name: 'spotify',
          link: `https://open.spotify.com/album/4GEvB2ILoxswhRmqHUrHDF?referral=labelaffiliate&utm_source=1100lvUfspoE&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
        },
        {
          name: 'apple',
          link: `https://music.apple.com/us/album/best-of/1603673852?uo=4`,
        },
        {
          name: 'amazon',
          link: `https://www.amazon.com/gp/product/B09PVPXJC8`,
        },
        {
          name: 'deezer',
          link: `https://www.deezer.com/en/album/28563816`,
        },
      ],
    },
  ],
};

/****************************************
     JOURNEY
****************************************/
export const journey = 'My Journey';
const years = new Date().getFullYear() - 1985;

export const biography = [
  {
    title: 'Quem Sou Eu',
    image: 'whoAmI.jpg',
    description: `Meu nome é Helder Tavares, mais conhecido por "Derito". Sou autor e compositor angolano que pretende expor a música angolana além fronteiras e mostrar às pessoas a qualidade das nossas raízes. Faz ${years} anos (1985) e espero continuar por muito mais tempo.`,
  },

  {
    title: 'Primeiros Dias',
    image: 'earlyDays.jpg',
    description: `Nasci e cresci em Benguela, Angola, em agosto de 1966. Emigrei para Portugal em 1982, devido à guerra em Angola e fui forçado a adaptar-me rapidamente para sobreviver sozinho.Acabei por formar uma pequena banda e comecei a tocar em bares (em 1985), a fim de custear os meus estudos universitários. Mas chegou um momento em que tive que fazer uma escolha entre os estudos e a música, e foi aí que decidi tornar-me músico em período integral`,
  },

  {
    title: 'Minha Carreira',
    image: 'myCareer.jpg',
    description: `Sou autor de quatro álbuns entre 1995 e 2016. Em 2006, fui representante de Angola na Copa do Mundo de futebol na Alemanha.Em 2007, compus o Hino para o campeonato africano de basquetebol. Em 2010 fui nomeado embaixador musical angolano na Taça das Nações Africanas de futebol e compus 2 faixas para a competição.`,
  },
];

export const features = {
  title: 'Quem Eu Conheci',
  artists: [
    {
      name: `Manu Dibango`,
      description: `Um dos maiores saxofonistas do mundo, Manu participou de uma faixa do meu 3º álbum.`,
      image: `manu-dibango`,
    },
    {
      name: `Hugh Masekela`,
      description: `Mestre do trompete, o grande Hugh participou de 2 faixas do meu 3º álbum`,
      image: `hugh-masekela`,
    },
    {
      name: `Jacob Desvarieux`,
      description: `A lenda do Kassav', participou de 2 músicas do meu terceiro álbum e produziu todo o meu quarto álbum.`,
      image: `jacob-desvarieux`,
    },
    {
      name: `Jean C. Naimro`,
      description: `Um mágico no teclado, Jean-Claude do Kassav participou de 4 faixas do meu 4º álbum`,
      image: `jean-naimro`,
    },
    {
      name: `Georges Decimus`,
      description: `Conhecido por seu groove de classe mundial no baixo, Décimus do Kassav participou de 4 faixas do meu 4º `,
      image: `georges-decimus`,
    },
    {
      name: `Paulo Calasans`,
      description: `Mestre do piano, o grande Paulo apareceu em 2 títulos do meu 3º álbum.`,
      image: `paulo-calasans`,
    },
    {
      name: `Yura Silva`,
      description: `Uma das maiores vozes da comunidade PALOP, Yura participou numa das faixas do meu 4º álbum.`,
      image: `yura-silva`,
    },
    {
      name: `Simmons Massini`,
      description: `Um artista multi-talentoso de classe mundial, produziu 3 faixas no meu 3º álbum`,
      image: `simmons-massini`,
    },
    {
      name: `Pedro Joia`,
      description: `Uma lenda portuguesa na guitarra flamenca, Pedro participou em 1 faixa do meu 3º álbum`,
      image: `pedro-joia`,
    },
  ],
};

export const events = {
  title: 'Onde Eu Estive',
  entries: [
    {
      country: 'Angola',
      coordinates: [47, 65],
      direction: 'after',
      svg: 'angola',
      events: [
        {
          title: 'Festival da Decada',
          city: 'Luanda',
          svg: 'city-luanda.svg',
          date: '1999',
        },

        {
          title: 'Fenacult',
          city: 'Luanda',
          svg: 'city-luanda.svg',
          date: '2014',
        },

        {
          title: 'Trienal',
          city: 'Luanda',
          svg: 'city-luanda.svg',
          date: '2016',
        },
      ],
    },

    {
      country: 'Brasil',
      direction: 'before',
      svg: 'brazil',
      coordinates: [22, 75],
      events: [
        {
          title: 'Gravar Album',
          city: 'Rio de Janeiro',
          svg: 'city-rio.svg',
          date: '2003',
        },
      ],
    },

    {
      country: 'Cabo Verde',
      direction: 'after',
      svg: 'cape-verde',
      coordinates: [29, 49],
      events: [
        {
          title: 'Festival da Praia',
          city: 'Praia',
          svg: 'city-praia.svg',
          date: '1996',
        },
      ],
    },

    {
      country: 'China',
      direction: 'after',
      svg: 'china',
      coordinates: [91, 37],
      events: [
        {
          title: 'Expo',
          city: 'Xangai',
          svg: 'city-shanghai.svg',
          date: '2010',
        },
      ],
    },

    {
      country: 'Inglaterra',
      direction: 'after',
      svg: 'uk',
      coordinates: [38, 15],
      events: [
        {
          title: 'Queen Elizabeth Hall',
          city: 'Londres',
          svg: 'city-london.svg',
          date: '2008',
        },
        {
          title: 'Festival Africa Oye',
          city: 'Liverpool',
          svg: 'city-liverpool.svg',
          date: '2015',
        },
        {
          title: 'Festival Global Rhythm',
          city: 'Ipswich',
          svg: 'city-ipswich.svg',
          date: '2017',
        },
      ],
    },

    {
      country: 'França',
      direction: 'after',
      svg: 'france',
      coordinates: [40, 24],
      events: [
        {
          title: 'Gravar Album',
          city: 'Paris',
          svg: 'city-paris.svg',
          date: '2002 & 2016',
        },
      ],
    },

    {
      country: 'Alemanha',
      direction: 'after',
      svg: 'germany',
      coordinates: [49, 21],
      events: [
        {
          title: 'Festival da Copa do Mundo',
          city: 'Hanover',
          svg: 'city-hanover.svg',
          date: '2006',
        },
      ],
    },
    {
      country: 'Holanda',
      direction: 'before',
      svg: 'holland',
      coordinates: [44, 20],
      events: [
        {
          title: 'Concerto',
          city: 'Amsterdam',
          svg: 'city-amsterdam.svg',
          date: '1998',
        },
      ],
    },

    {
      country: 'Moçambique',
      direction: 'before',
      svg: 'mozambique',
      coordinates: [59.5, 72.5],
      events: [
        {
          date: '1997',
          city: 'Maputo',
          svg: 'city-maputo.svg',
          title: 'Tour Promocional',
        },
      ],
    },

    {
      country: 'Namibia',
      direction: 'after',
      svg: 'namibia',
      coordinates: [48, 78],
      events: [
        {
          date: '1997',
          city: 'Windhoek ',
          svg: 'city-windhoek.svg',
          title: 'Festival International de Jazz',
        },
      ],
    },

    {
      country: 'Portugal',
      direction: 'after',
      svg: 'portugal',
      coordinates: [36.5, 29],
      events: [
        {
          date: '1998',
          city: 'Lisboa',
          svg: 'city-lisbon.svg',
          title: 'Expo',
        },
      ],
    },

    {
      country: 'África Do Sul',
      direction: 'before',
      svg: 'south-africa',
      coordinates: [56, 83],
      events: [
        {
          date: '2002',
          city: 'Joanesburgo',
          svg: 'city-johannesburg.svg',
          title: 'Gravar Album',
        },
      ],
    },

    {
      country: 'Suíça',
      direction: 'after',
      svg: 'switzerland',
      coordinates: [45.5, 24],
      events: [
        {
          date: '1991',
          city: 'Genebra',
          svg: 'city-geneva.svg',
          title: 'Festival da Paz',
        },
      ],
    },
  ],
};

// console.log(events.entries);

/****************************************
     GALLERY
****************************************/
export const gallery = {
  photos: [
    {
      number: 1,
      size: 'large',
      description:
        'Lançamento do primeiro álbum "Saudade": Teatro S.Luiz, Lisboa-Portugal julho de 1995',
    },
    {
      number: 2,
      size: 'regular',
      description: 'Africa Oye Festival: Liverpool-Inglaterra, Junho de 2015',
    },
    {number: 3, size: 'wide', description: 'Concerto 30 Anos de Carreira: Luanda-Angola, Out 2015'},
    {
      number: 4,
      size: 'small',
      description:
        'Lançamento do terceiro álbum "Discernimento": Teatro M.Matos, Lisboa-Portugal Out 2004',
    },
    {number: 5, size: 'small', description: 'Derito e Manu Dibango, Luanda-Angola, 2014'},
    {
      number: 6,
      size: 'tall',
      description:
        'Lançamento do terceiro álbum "Discernimento": Teatro M.Matos, Lisboa-Portugal Out 2004',
    },
    {number: 7, size: 'regular', description: 'Embaixada do Brasil, Luanda-Angola, 2014'},
    {
      number: 8,
      size: 'regular',
      description: 'Derito em estúdio com Manu Dibango, Paris-França, outubro de 2002',
    },
    {number: 9, size: 'wide', description: 'Derito ao vivo, Luanda-Angola, 2014'},
    {
      number: 10,
      size: 'regular',
      description: 'Derito em estúdio com os Metais do Kassav, Paris-França, outubro de 2002',
    },
    {
      number: 11,
      size: 'wide',
      description: 'Derito em estúdio com Jacob Desvarieux, Paris-França, outubro de 2002',
    },
    {number: 12, size: 'regular', description: 'Derito e Hugh Masekela, Luanda-Angola, 2004'},
    {
      number: 13,
      size: 'regular',
      description: 'Derito em estúdio com Jacob Desvarieux, Paris-França, outubro de 2002',
    },
    {
      number: 14,
      size: 'long',
      description: 'Africa Oye Festival: Liverpool-Inglaterra, Junho de 2015',
    },
    {number: 15, size: 'regular', description: 'Embaixada do Brasil, Luanda-Angola, 2014'},
    {
      number: 16,
      size: 'long',
      description:
        'Derito em estúdio com Jacob Desvarieux e Georges Décimus, Paris-França, outubro de 2002',
    },
    {number: 17, size: 'small', description: 'Derito e Hugh Masekela, Luanda-Angola, 2004'},
    {number: 18, size: 'small', description: 'Derito e Mestre Kamosso, Luanda-Angola, 2014'},
    {number: 19, size: 'square', description: 'Primeiros Passos, Lisboa-Portugal, Ago 1984'},
    {number: 20, size: 'regular', description: 'Embaixada do Brasil, Luanda-Angola, 2014'},
    {
      number: 21,
      size: 'tall',
      description:
        'Lançamento do primeiro álbum "Saudade": Teatro S.Luiz, Lisboa-Portugal julho de 1995',
    },
    {number: 22, size: 'regular', description: 'Derito ao vivo, Xangai-China, 2010'},
    {
      number: 23,
      size: 'regular',
      description:
        'Lançamento do terceiro álbum "Discernimento": Teatro M.Matos, Lisboa-Portugal Out 2004',
    },
    {
      number: 24,
      size: 'tall',
      description: 'Derito com Tito Paris and G.Tchiema, Luanda-Angola, 2014',
    },
    {number: 25, size: 'large', description: 'Um dos Primeiros Pubs, Lisboa-Portugal, 1987'},
  ],

  videos: [
    {title: 'Kissange', link: 'BDFuNgHTb5w'},
    {title: 'Etu', link: 'ttIrDPiMVxY'},
    {title: 'Saudade Que Nao Tive', link: 'AFK-RSHBv8E'},
    {title: 'Mama Africa', link: 'SnPs9EXZyLA'},
    {title: 'Nzambi Ngo', link: 'gkjzqEcsuIM'},
    {title: 'Chega de Saudade', link: 'dHblLW_52Rg'},
    {title: 'Quitanda da Vida', link: 'ZOvvxDre6KA'},
  ],

  button: {
    goTo: 'Ir Para',
    videos: 'Videos',
    photos: 'Fotos',
  },
};

/****************************************
     CONTACT
****************************************/
export const contact = {
  title: 'Contacto',

  formFields: {
    name: 'Nome',
    email: 'Email',
    message: 'Mensagem',
    send: 'Enviar',
  },

  prompt: {
    success: 'A mensagem foi enviada',
    failure: 'Message Not Sent, please try again',
  },

  copyright: `© ${
    new Date().getFullYear
  } NG Music Productions. All rights reserved. Use of this site constitutes acceptance of our User Agreement and Privacy Policy and Cookie Statement and Your United Nations Privacy Rights. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of NG Music Productions.`,
};
