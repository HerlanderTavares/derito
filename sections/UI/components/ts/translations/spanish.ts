/****************************************
     NAVIGATION
****************************************/
export const navLinks = [
  ['Bienvenido', 'welcome'],
  ['Mi Musica', 'music'],
  ['Mis Albumes', 'albums'],
  ['Mi Caminar', 'journey'],
  ['Galería', 'gallery'],
];

export const subtitle = 'Músico y Compositor';

/****************************************
     MUSIC
****************************************/
export const music = {
  semba: `África es un continente lleno de diferentes culturas y estilos musicales, pero me uní a los estilos más destacados de mi país natal, Angola, como Kilapanga, Rumba, Cumbia, Merengue y nuestra más conocida, Semba.`,
  afrojazz: `Afrojazz es una fusión entre la música africana y el jazz. Fue una progresión natural, comencé a agregar acordes y conceptos de jazz a mis canciones. La complejidad del Jazz aportó otro sabor a mi trabajo y reveló nuevas posibilidades.`,
  afrobossa: {
    description: `AfroBossa es una fusión entre Bossa Nova y Música Africana. Bossa Nova se deriva de la Samba, un estilo Brasileño con raíces en África, raíces que fueron traídas a Brasil durante la esclavitud entre los siglos 16 y 19. Creé este estilo con el objetivo de devolver esas raíces a la música Brasileña.`,
    button: 'Sepa Mas',
  },
};

/****************************************
     ALBUMS
****************************************/
export const albums = {
  button: 'Escuchar Álbum',
  prompts: ['Álbum Anterior', 'Siguiente Álbum'],
  covers: [
    {
      title: 'saudade',
      description: `"Saudade" fue mi primer álbum, lanzado en julio de 1995, después de haber sido el best seller en Angola en ese momento, donde soy recordado y conocido por los grandes éxitos que se han convertido en clásicos de la música angoleña. "Saudade", fue hecha por la experiencia de mi infancia y adolescencia en Benguela. Debido a la guerra en curso, en 1982 tuve que dejar atrás a familiares y amigos a la edad de 16 años, con el objetivo principal de obtener un título universitario sin interrupción.`,
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
      description: `Alison se lanzó en octubre de 1996. El videoclip de mi exitoso sencillo de este álbum fue nombrado "Mejor videoclip del año" en su momento. Este álbum recibe muchas solicitudes hasta el día de hoy, lo que me ha hecho considerar reeditarlo. Alison es el nombre de mi hijo primogénito, y este álbum fue dedicado a él. Mi sencillo de éxito de este álbum también se titula "Alison", que es una canción específicamente sobre él.`,
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
      description: `"Discernimento" fue lanzado en junio de 2004. Este fue mi trabajo más difícil hasta ahora, un proyecto de 4 años, desde la composición hasta la grabación y el lanzamiento. En este álbum, reuní algunos nombres prestigiosos en el mundo de la música, cada uno en su propio país. Fue un gran y fascinante desafío que me presentó al mundo de Afrojazz, donde tengo la intención de expandirme en el futuro inmediato.`,
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
      description: `"Best Of" fue lanzado en diciembre de 2016, 12 años después de mi último álbum, porque durante ese período estuve involucrado en eventos y producciones musicales de otros artistas. Entonces, para reiniciar mi carrera discográfica y reaparecer en el mercado, hice una colección de canciones de mis álbumes tan solicitados, que se rehicieron utilizando los miembros del grupo musical "Kassav".`,
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
    title: 'Quién Soy',
    image: 'whoAmI.jpg',
    description: `Mi nombre es Helder Tavares, más conocido como "Derito". Soy autor y compositor angoleño que pretende exponer la música angoleña más allá de sus fronteras y mostrarle a la gente la calidad de nuestras raíces. Han pasado ${years} años (1985) y espero continuar por mucho más tiempo.`,
  },

  {
    title: 'Primeros Dias',
    image: 'earlyDays.jpg',
    description: `Nací y crecí en Benguela, Angola es agosto de 1966. Emigré a Portugal en 1982, debido a la guerra en curso en Angola y me vi obligado a adaptarme rápidamente para sobrevivir por mi cuenta. Finalmente hice una pequeña banda y comencé a tocar en bares (en 1985), mientras estudiaba en la universidad. Pero llegó un momento en que tuve que elegir entre mis estudios y la música, y fue cuando decidí convertirme en músico a tiempo completo.`,
  },

  {
    title: 'Mi Carrera',
    image: 'myCareer.jpg',
    description: `Soy autor de cuatro álbumes entre 1995 y 2016. En 2006 fui representante de Angola en la Copa Mundial de fútbol en Alemania. En 2007 compuse el Himno para el equipo nacional de baloncesto de Angola, para el Campeonato Africano. En 2010 fui nominado Embajador Musical de Angola para la Copa Africana de Naciones de fútbol y compuse 2 pistas para la competencia.`,
  },
];

export const features = {
  title: 'A Quien He Conocido',
  artists: [
    {
      name: `Manu Dibango`,
      description: `Manu, uno de los mejores saxofonistas del mundo, apareció en una pista de mi tercer álbum.`,
      image: `manu-dibango`,
    },
    {
      name: `Hugh Masekela`,
      description: `Un maestro de la trompeta, el gran Hugh apareció en 2 pistas de mi tercer álbum.`,
      image: `hugh-masekela`,
    },
    {
      name: `Jacob Desvarieux`,
      description: `La leyenda de Kassav', apareció en 2 canciones de mi tercer álbum y produjo todo mi cuarto álbum.`,
      image: `jacob-desvarieux`,
    },
    {
      name: `Jean C. Naimro`,
      description: `Un mago en el teclado, Jean-Claude de Kassav apareció en 4 pistas de mi cuarto álbum.`,
      image: `jean-naimro`,
    },
    {
      name: `Georges Decimus`,
      description: `Conocido por su ritmo de clase mundial en el bajo, Décimus de Kassav apareció en 4 pistas de mi cuarto `,
      image: `georges-decimus`,
    },
    {
      name: `Paulo Calasans`,
      description: `Un maestro del piano, el gran Paulo apareció en 2 pistas de mi tercer álbum.`,
      image: `paulo-calasans`,
    },
    {
      name: `Yura Silva`,
      description: `Una de las mejores voces de la comunidad PALOP, Yura apareció en una pista de mi cuarto álbum.`,
      image: `yura-silva`,
    },
    {
      name: `Simmons Massini`,
      description: `Un artista de clase mundial con múltiples talentos, produjo 3 pistas en mi tercer álbum.`,
      image: `simmons-massini`,
    },
    {
      name: `Pedro Joia`,
      description: `Una leyenda portuguesa de la guitarra flamenca, Pedro apareció en 1 pista de mi tercer álbum`,
      image: `pedro-joia`,
    },
  ],
};

export const events = {
  title: 'Donde He Estado',
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
          title: 'Festival de la Playa',
          city: 'Playa',
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
          city: 'Shanghai',
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
      country: 'Francia',
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
      country: 'Alemania',
      direction: 'after',
      svg: 'germany',
      coordinates: [49, 21],
      events: [
        {
          title: 'Festival da Copa do Mundo',
          city: 'Hanovre',
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
      country: 'Mozambique',
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
      country: 'Sudáfrica',
      direction: 'before',
      svg: 'south-africa',
      coordinates: [56, 83],
      events: [
        {
          date: '2002',
          city: 'Johannesburgo',
          svg: 'city-johannesburg.svg',
          title: 'Gravar Album',
        },
      ],
    },

    {
      country: 'Suiza',
      direction: 'after',
      svg: 'switzerland',
      coordinates: [45.5, 24],
      events: [
        {
          date: '1991',
          city: 'Ginebra',
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
        'Lanzamiento del primer disco "Saudade": Teatro S.Luiz, Lisboa-Portugal Julio 1995',
    },
    {
      number: 2,
      size: 'regular',
      description: 'Africa Oye Festival: Liverpool-Inglaterra, Junio de 2015',
    },
    {number: 3, size: 'wide', description: 'Concierto 30 Años de Carrera: Luanda-Angola, Oct 2015'},
    {
      number: 4,
      size: 'small',
      description:
        'Lanzamiento del tercer disco "Discernimento": Teatro M.Matos, Lisboa-Portugal Oct 2004',
    },
    {number: 5, size: 'small', description: 'Derito y Manu Dibango, Luanda-Angola, 2014'},
    {
      number: 6,
      size: 'tall',
      description:
        'Lanzamiento del tercer disco "Discernimento": Teatro M.Matos, Lisboa-Portugal Oct 2004',
    },
    {number: 7, size: 'regular', description: 'Embajada de Brasil, Luanda-Angola, 2014'},
    {
      number: 8,
      size: 'regular',
      description: 'Derito en estudio con Manu Dibango, París-Francia, octubre de 2002',
    },
    {number: 9, size: 'wide', description: 'Derito en vivo, Luanda-Angola, 2014'},
    {
      number: 10,
      size: 'regular',
      description: 'Derito en estudio con los metales de Kassav, París-Francia, octubre de 2002',
    },
    {
      number: 11,
      size: 'wide',
      description: 'Derito en estudio con Jacob Desvarieux, París-Francia, octubre de 2002',
    },
    {number: 12, size: 'regular', description: 'Derito y Hugh Masekela, Luanda-Angola, 2004'},
    {
      number: 13,
      size: 'regular',
      description: 'Derito en estudio con Jacob Desvarieux, París-Francia, octubre de 2002',
    },
    {
      number: 14,
      size: 'long',
      description: 'Africa Oye Festival: Liverpool-Inglaterra, Junio de 2015',
    },
    {number: 15, size: 'regular', description: 'Embajada de Brasil, Luanda-Angola, 2014'},
    {
      number: 16,
      size: 'long',
      description:
        'Derito en estudio con Jacob Desvarieux y Georges Décimus, París-Francia, octubre de 2002',
    },
    {number: 17, size: 'small', description: 'Derito y Hugh Masekela, Luanda-Angola, 2004'},
    {number: 18, size: 'small', description: 'Derito y Mestre Kamosso, Luanda-Angola, 2014'},
    {number: 19, size: 'square', description: 'Primeros Pasos, Lisboa-Portugal, Agosto 1984'},
    {number: 20, size: 'regular', description: 'Embajada de Brasil, Luanda-Angola, 2014'},
    {
      number: 21,
      size: 'tall',
      description:
        'Lanzamiento del primer disco "Saudade": Teatro S.Luiz, Lisboa-Portugal Julio 1995',
    },
    {number: 22, size: 'regular', description: 'Derito en vivo, Shanghai-China, 2010'},
    {
      number: 23,
      size: 'regular',
      description:
        'Lanzamiento del tercer disco "Discernimento": Teatro M.Matos, Lisboa-Portugal Oct 2004',
    },
    {
      number: 24,
      size: 'tall',
      description: 'Derito com Tito Paris and G.Tchiema, Luanda-Angola, 2014',
    },
    {number: 25, size: 'large', description: 'Uno de los Primeros Pubs, Lisboa-Portugal, 1987'},
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
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensage',
    send: 'Enviar',
  },

  prompt: {
    success: 'El mensaje fue enviado',
    failure: 'Mensaje no enviado, inténtalo de nuevo',
  },

  copyright: `© ${
    new Date().getFullYear
  } NG Music Productions. All rights reserved. Use of this site constitutes acceptance of our User Agreement and Privacy Policy and Cookie Statement and Your United Nations Privacy Rights. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of NG Music Productions.`,
};
