/****************************************
     NAVIGATION
****************************************/
export const navLinks = [
  ['Welcome', 'welcome'],
  ['My Music', 'music'],
  ['My Albums', 'albums'],
  ['My Journey', 'journey'],
  ['Gallery', 'gallery'],
];

export const subtitle = 'Musician & Composer';

/****************************************
     MUSIC
****************************************/
export const music = {
  semba: `Africa is a continent filled with many different rich cultures and styles of music, but I gravitated to the styles that are more prominent in my birth country of Angola, such as Kilapanga, Rumba, Cumbia, Merengue, and our most well-known, Semba.`,
  afrojazz: `AfroJazz is a fusion between the African style of music and Jazz. This was a natural progression for me even from my original style, as I began adding Jazz chords and elements to my songs. The complexity of Jazz brought another flavour to my work, and revealed new possibilities`,
  afrobossa: {
    description: `AfroBossa is a fusion between Bossa Nova and African music. Bossa Nova is a child of Samba, a Brazilian style that has its roots in Africa, roots taken to Brazil during the slave trade. I created this style with the aim of bringing those roots back to Brazilian music.`,
    button: 'Learn More',
  },
};

/****************************************
     ALBUMS
****************************************/
export const albums = {
  button: 'Listen to Album',
  prompts: ['Previous Album', 'Next Album'],
  covers: [
    {
      title: 'saudade',
      description: `Saudade was my first album, which was released in July 1995. This album was the best seller in Angola in its time and i am still remembered and known by my best hits from this album. \n Saudade, meaning "to miss", was made in remembrance of my childhood and my country, more specifically my city Benguela. Because of the on going war, I had to migrate to Portugal, leaving family and friends behind to fend off on my own at the age of 16.`,
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
      description: `Alison was released in October 1996. The video clip of my hit single in this album was named "Best Video Clip of the Year" in its time. This album gets many requests to this day which has made consider re-editing it. Alison is the name of my first born child, and this album was dedicated to him. My hit single from this album is also titled "Alison" which is a song specifically about him.`,
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
      description: `Discernimento was released in June 2004. This was my toughest work yet, a project of 4 years, from writing to recording and releasing. In this album I gathered some prestigious names in the music world, each in their own country. It was a great challenge, but a lot of fun. This album introduced me to the world of Afro Jazz where i plan to expand in the near future.`,
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
      description: `Best Of was released in December 2016. 12 years have passed since my last released, because during this time period I was involved in many other things other than making music, such as businesses and even producing others. So to reboot my discographical career and to reappear in the market, I made a collection of songs from my 3 albums, which were reproduced and remade, with some new features from members of the music group "Kassav".`,
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
    title: 'Who am I',
    image: 'whoAmI.jpg',
    description: `My name is Helder Tavares, better known as "Derito". I am an Angolan song writer and composer who aims to expose the Angolan music past its borders and show people the quality of our roots. Its been ${years} years (1985) and i hope to continue for much longer.`,
  },

  {
    title: 'Early Days',
    image: 'earlyDays.jpg',
    description: `I was born and raised in Benguela, Angola in August 1966. I migrated to Portugal in 1982 due to the ongoing war in Angola and was forced to adapt quickly in order to survive on my own. I eventually made a small band and started playing in bars (in 1985), alongside university. I managed to finish my course, but decided to pursue my new found passion as a full-time musician`,
  },

  {
    title: 'My Career',
    image: 'myCareer.jpg',
    description: `I am the author of 4 albums between 1995 and 2016. In 2006 I was Angola's representative in the football World Cup in Germany. In 2007 I composed the Anthem for the African Basketball Championship. In 2010 I was nominated the Ambassador for the Football African Cup of Nations and I composed 2 tracks for the competition.`,
  },
];

export const features = {
  title: "Whom I've Met",
  artists: [
    {
      name: `Manu Dibango`,
      description: `One of the greatest saxophonists in the world, Manu featured on one track on my 3rd album.`,
      image: `manu-dibango`,
    },
    {
      name: `Hugh Masekela`,
      description: `A master of the trumpet, the great Hugh featured on 2 tracks in my 3rd album`,
      image: `hugh-masekela`,
    },
    {
      name: `Jacob Desvarieux`,
      description: `The legend of Kassav', he featured on 2 songs on my 3rd album, and produced my entire 4th album.`,
      image: `jacob-desvarieux`,
    },
    {
      name: `Jean C. Naimro`,
      description: `A magician on the keyboard, Jean from Kassav featured on 4 tracks on my 4th album`,
      image: `jean-naimro`,
    },
    {
      name: `Georges Decimus`,
      description: `Known for his world class groove on the bass, Georges from Kassav featured on 4 tracks on my 4th album`,
      image: `georges-decimus`,
    },
    {
      name: `Paulo Calasans`,
      description: `A master on the piano, the great Paulo featured on 2 tracks on my 3rd album.`,
      image: `paulo-calasans`,
    },
    {
      name: `Yura Silva`,
      description: `One of the greatest voices in the PALOP community, Yura featured on one track on my 4th album.`,
      image: `yura-silva`,
    },
    {
      name: `Simmons Massini`,
      description: `A multi-talented world-class artist, he produced 3 tracks on my 3rd album`,
      image: `simmons-massini`,
    },
    {
      name: `Pedro Joia`,
      description: `A portuguese legend on the guitar, Pedro featured on 1 track on my 3rd album`,
      image: `pedro-joia`,
    },
  ],
};

export const events = {
  title: "Where I've Been",
  entries: [
    {
      country: 'Angola',
      coordinates: [47, 65],
      direction: 'after',
      svg: 'angola',
      events: [
        {
          title: 'Decade Festival',
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
      country: 'Brazil',
      direction: 'before',
      svg: 'brazil',
      coordinates: [22, 75],
      events: [
        {
          title: 'Recording Album',
          city: 'Rio de Janeiro',
          svg: 'city-rio.svg',
          date: '2003',
        },
      ],
    },

    {
      country: 'Cape Verde',
      direction: 'after',
      svg: 'cape-verde',
      coordinates: [29, 49],
      events: [
        {
          title: 'Praia Festival',
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
          city: 'Shanghai',
          svg: 'city-shanghai.svg',
          date: '2010',
        },
      ],
    },

    {
      country: 'United Kingdom',
      direction: 'after',
      svg: 'uk',
      coordinates: [38, 15],
      events: [
        {
          title: 'Queen Elizabeth Hall',
          city: 'London',
          svg: 'city-london.svg',
          date: '2008',
        },
        {
          title: 'Africa Oye Festival',
          city: 'Liverpool',
          svg: 'city-liverpool.svg',
          date: '2015',
        },
        {
          title: 'Global Rhythm Festival',
          city: 'Ipswich',
          svg: 'city-ipswich.svg',
          date: '2017',
        },
      ],
    },

    {
      country: 'France',
      direction: 'after',
      svg: 'france',
      coordinates: [40, 24],
      events: [
        {
          title: 'Record Album',
          city: 'Paris',
          svg: 'city-paris.svg',
          date: '2002 & 2016',
        },
      ],
    },

    {
      country: 'Germany',
      direction: 'after',
      svg: 'germany',
      coordinates: [49, 21],
      events: [
        {
          title: 'World Cup Festival',
          city: 'Hanover',
          svg: 'city-hanover.svg',
          date: '2006',
        },
      ],
    },
    {
      country: 'Netherlands',
      direction: 'before',
      svg: 'holland',
      coordinates: [44, 20],
      events: [
        {
          title: 'Concert',
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
          title: 'Promotional Tour',
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
          title: 'International Jazz Festival',
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
          city: 'Lisbon',
          svg: 'city-lisbon.svg',
          title: 'Expo',
        },
      ],
    },

    {
      country: 'South Africa',
      direction: 'before',
      svg: 'south-africa',
      coordinates: [56, 83],
      events: [
        {
          date: '2002',
          city: 'Johannesburg',
          svg: 'city-johannesburg.svg',
          title: 'Record Album',
        },
      ],
    },

    {
      country: 'Switzerland',
      direction: 'after',
      svg: 'switzerland',
      coordinates: [45.5, 24],
      events: [
        {
          date: '1991',
          city: 'Geneva',
          svg: 'city-geneva.svg',
          title: 'Peace Festival',
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
      description: 'Release of first album "Saudade": Theatre S.Luiz, Lisbon-Portugal July 1995',
    },
    {number: 2, size: 'regular', description: 'Africa Oye Festival: Liverpool-England, June 2015'},
    {number: 3, size: 'wide', description: '30 Years Career Concert: Luanda-Angola, Oct 2015'},
    {
      number: 4,
      size: 'small',
      description:
        'Release of third album "Discernimento": Theatre M.Matos, Lisbon-Portugal Oct 2004',
    },
    {number: 5, size: 'small', description: 'Derito and Manu Dibango, Luanda-Angola, 2014'},
    {
      number: 6,
      size: 'tall',
      description:
        'Release of third album "Discernimento": Theatre M.Matos, Lisbon-Portugal Oct 2004',
    },
    {number: 7, size: 'regular', description: 'Brazil Embassy, Luanda-Angola, 2014'},
    {
      number: 8,
      size: 'regular',
      description: 'Derito in studio with Manu Dibango, Paris-France, Oct 2002',
    },
    {number: 9, size: 'wide', description: 'Derito live, Luanda-Angola, 2014'},
    {
      number: 10,
      size: 'regular',
      description: 'Derito in studio with Kassav Brass, Paris-France, Oct 2002',
    },
    {
      number: 11,
      size: 'wide',
      description: 'Derito in studio with Jacob Desvarieux, Paris-France, Oct 2002',
    },
    {number: 12, size: 'regular', description: 'Derito and Hugh Masekela, Luanda-Angola, 2004'},
    {
      number: 13,
      size: 'regular',
      description: 'Derito in studio with Jacob Desvarieux, Paris-France, Oct 2002',
    },
    {number: 14, size: 'long', description: 'Africa Oye Festival: Liverpool-England, June 2015'},
    {number: 15, size: 'regular', description: 'Brazil Embassy, Luanda-Angola, 2014'},
    {
      number: 16,
      size: 'long',
      description:
        'Derito in studio with Jacob Desvarieux and Georges Décimus, Paris-France, Oct 2002',
    },
    {number: 17, size: 'small', description: 'Derito and Hugh Masekela, Luanda-Angola, 2004'},
    {number: 18, size: 'small', description: 'Derito and Mestre Kamosso, Luanda-Angola, 2014'},
    {number: 19, size: 'square', description: 'First Steps, Lisbon-Portugal, Aug 1984'},
    {number: 20, size: 'regular', description: 'Brazil Embassy, Luanda-Angola, 2014'},
    {
      number: 21,
      size: 'tall',
      description: 'Release of first album "Saudade": Theatre S.Luiz, Lisbon-Portugal July 1995',
    },
    {number: 22, size: 'regular', description: 'Derito live, Shanghai-China, 2010'},
    {
      number: 23,
      size: 'regular',
      description:
        'Release of third album "Discernimento": Theatre M.Matos, Lisbon-Portugal Oct 2004',
    },
    {
      number: 24,
      size: 'tall',
      description: 'Derito with Tito Paris and G.Tchiema, Luanda-Angola, 2014',
    },
    {number: 25, size: 'large', description: 'One of the First Pubs, Lisbon-Portugal, 1987'},
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
    goTo: 'Go to',
    videos: 'Videos',
    photos: 'Photos',
  },
};

/****************************************
     CONTACT
****************************************/
export const contact = {
  title: 'Contact',

  formFields: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
  },

  prompt: {
    success: 'Message was sent',
    failure: 'Message not sent, try again',
  },

  copyright: `© ${
    new Date().getFullYear
  } NG Music Productions. All rights reserved. Use of this site constitutes acceptance of our User Agreement and Privacy Policy and Cookie Statement and Your United Nations Privacy Rights. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of NG Music Productions.`,
};
