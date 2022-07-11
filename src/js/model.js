import {timer} from './helper.js';

/****************************************
     NAVBAR LABELS
****************************************/
export const navLabels = {
  myMusic: {
    english: `my music`,
    french: `mes musique`,
    portuguese: `minha musica`,
    spanish: `mi musica`,
    german: `meine musik`,
  },

  myAlbums: {
    english: `my albums`,
    french: `mes albums`,
    portuguese: `meus albuns`,
    spanish: `mis albumes`,
    german: `meine alben`,
  },

  myJourney: {
    english: `my journey`,
    french: `ma marche`,
    portuguese: `minha caminhada`,
    spanish: `mi caminar`,
    german: `meine reise`,
  },

  gallery: {
    english: `gallery`,
    french: `galerie`,
    portuguese: `galeria`,
    spanish: `galería`,
    german: `galerie`,
  },

  contact: {
    english: `contact`,
    french: `contact`,
    portuguese: `contacto`,
    spanish: `contacto`,
    german: `kontakt`,
  },
};

/****************************************
     MUSIC STYLES INFORMATION
****************************************/
export const musicStyles = {
  semba: {
    english: `Africa is a continent filled with many different rich cultures and styles of music, but I gravitated to the styles that are more prominent in my birth country of Angola, such as Kilapanga, Rumba, Cumbia, Merengue, and our most well-known, Semba.`,
    french: `L'Afrique est un continent rempli de nombreuses cultures et styles musicaux riches, mais j'ai adhéré aux styles les plus en vue dans mon pays natal, l'Angola, tels que Kilapanga, Rumba, Cumbia, Merengue et notre plus connu, Semba.`,
    portuguese: `África é um continente repleto de culturas e estilos musicais diferentes, mas eu aderi aos estilos mais proeminentes do meu país natal, Angola, como Kilapanga, Rumba, Cumbia, Merengue e nosso mais conhecido, Semba.`,
    spanish: `África es un continente lleno de diferentes culturas y estilos musicales, pero me uní a los estilos más destacados de mi país natal, Angola, como Kilapanga, Rumba, Cumbia, Merengue y nuestra más conocida, Semba.`,
    german: `Afrika ist ein Kontinent mit vielen verschiedenen reichen Kulturen und Musikstilen, aber ich habe mich zu den Stilen hingezogen gefühlt, die in meinem Geburtsland Angola am bekanntesten sind, wie Kilapanga, Rumba, Cumbia, Merengue und unser bekanntester, Semba.`,
  },

  afrojazz: {
    english: `AfroJazz is a fusion between the African style of music and Jazz. This was a natural progression for me even from my original style, as I began adding Jazz chords and elements to my songs. The complexity of Jazz brought another flavour to my work, and revealed new possibilities.`,
    french: `L'Afrojazz est une fusion entre la musique africaine et le jazz. C'était une progression naturelle pour moi même comme j'ai commencé à ajouter des accords de jazz et d'autres éléments de jazz à mes chansons. La complexité du Jazz a apporté une autre saveur à mon travail et a révélé de nouvelles possibilités.`,
    portuguese: `Afrojazz é uma fusão entre música africana e jazz. Foi uma progressão natural para mim, ao adicionar acordes e concepções de Jazz às minhas músicas. A complexidade do Jazz trouxe outro sabor ao meu trabalho e revelou novas possibilidades.`,
    spanish: `Afrojazz es una fusión entre la música africana y el jazz. Fue una progresión natural, comencé a agregar acordes y conceptos de jazz a mis canciones. La complejidad del Jazz aportó otro sabor a mi trabajo y reveló nuevas posibilidades.`,
    german: `AfroJazz ist eine Fusion zwischen dem afrikanischen Musikstil und Jazz. Das war für mich eine natürliche Weiterentwicklung meines ursprünglichen Stils, als ich begann, Jazz-Akkorde und -Elemente in meine Songs einzubauen. Die Komplexität des Jazz gab meiner Arbeit eine andere Note und eröffnete neue Möglichkeiten.`,
  },

  afrobossa: {
    english: `AfroBossa is a fusion between Bossa Nova and African music. Bossa Nova is a child of Samba, a Brazilian style that has its roots in Africa, roots taken to Brazil during the slave trade. I created this style with the aim of bringing those roots back to Brazilian music.`,
    french: `AfroBossa est une fusion entre la bossa nova et la Musique Africaine. La Bossa Nova est dérivée de la Samba, un style Brésilien avec des racines en Afrique, des racines qui ont été apportées au Brésil pendant l'esclavage entre le XVIe et le XIXe siècle. J'ai créé ce style dans le but de ramener ces racines à la musique Brésilienne.`,
    portuguese: `AfroBossa é uma fusão entre a Bossa Nova e a Música Africana. A Bossa Nova é derivado do Samba, um estilo Brasileiro com raízes em África, raízes que foram levadas para o Brasil durante a escravatura entre os séculos 16 e 19. Criei este estilo com o objetivo de trazer essas raízes de volta para a música brasileira.`,
    spanish: `AfroBossa es una fusión entre Bossa Nova y Música Africana. Bossa Nova se deriva de la Samba, un estilo Brasileño con raíces en África, raíces que fueron traídas a Brasil durante la esclavitud entre los siglos 16 y 19. Creé este estilo con el objetivo de devolver esas raíces a la música Brasileña.`,
    german: `AfroBossa ist eine Verschmelzung von Bossa Nova und afrikanischer Musik. Bossa Nova ist ein Kind des Samba, eines brasilianischen Stils, der seine Wurzeln in Afrika hat, Wurzeln, die während des Sklavenhandels nach Brasilien gebracht wurden. Ich habe diesen Stil mit dem Ziel geschaffen, diese Wurzeln in die brasilianische Musik zurückzubringen.`,
  },
};

/****************************************
     ALBUM INFORMATION
****************************************/
export const albums = [
  {
    name: 'saudade',
    order: '1st',
    releaseYear: 1995,
    numberOfTracks: 8,
    description: {
      english: `Saudade was my first album, which was released in July 1995. This album was the best seller in Angola in its time and i am still remembered and known by my best hits from this album.<br/><br/>Saudade, meaning "to miss", was made in remembrance of my childhood and my country, more specifically my city Benguela. Because of the on going war, I had to migrate to Portugal, leaving family and friends behind to fend off on my own at the age of 16.`,
      french: `"Saudade" a été mon premier album, qui est sorti en juillet 1995. Cet album était le best-seller en Angola en son temps et je suis encore connu par mes meilleurs morceaux de cet album.<br/><br/>"Saudade" qui signifie "manquer", a été faite en souvenir de mon enfance et de mon pays, plus précisément ma ville Benguela. En raison de la guerre en cours, j'ai dû émigrer au Portugal, laissant ma famille et mes amis derrière moi pour me débrouiller seul à l'âge de 16 ans.`,
      portuguese: `"Saudade" foi o meu primeiro álbum, lançado em Julho de 1995, tendo sido o mais vendido em Angola naquela altura, onde sou lembrado e me tornei conhecido pelos grandes sucessos que se tornaram clássicos da música angolana.<br/><br/>"Saudade", foi feito pela vivência da minha infância e adolescência em Benguela. Por causa da guerra em curso, em 1982 tive que deixar família e amigos para trás aos 16 anos de idade, com o principal objetivo de tirar um curso superior sem interrupções.`,
      spanish: `"Saudade" fue mi primer álbum, lanzado en julio de 1995, después de haber sido el best seller en Angola en ese momento, donde soy recordado y conocido por los grandes éxitos que se han convertido en clásicos de la música angoleña.<br/><br/>"Saudade", fue hecha por la experiencia de mi infancia y adolescencia en Benguela. Debido a la guerra en curso, en 1982 tuve que dejar atrás a familiares y amigos a la edad de 16 años, con el objetivo principal de obtener un título universitario sin interrupción.`,
      german: `Saudade war mein erstes Album, das im Juli 1995 veröffentlicht wurde. Dieses Album war seinerzeit der Verkaufsschlager in Angola und ich bin immer noch in Erinnerung und bekannt durch meine besten Hits aus diesem Album.<br/><br/>Saudade, was soviel wie "vermissen" bedeutet, entstand in Erinnerung an meine Kindheit und mein Land, genauer gesagt an meine Stadt Benguela. Wegen des andauernden Krieges musste ich nach Portugal auswandern und Familie und Freunde zurücklassen, um mich im Alter von 16 Jahren allein durchzuschlagen.`,
    },

    links: {
      spotify: `https://open.spotify.com/album/6fo8gnrWMG1HMTmn4RDCfD?referral=labelaffiliate&utm_source=1101lvUyfuyI&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
      apple: `https://music.apple.com/us/album/saudade/1595385794?uo=4`,
      amazon: `https://www.amazon.com/gp/product/B09LSR2G9G`,
      deezer: `https://www.deezer.com/en/album/253639922`,
    },
  },

  {
    name: 'alison',
    order: '2nd',
    releaseYear: 1996,
    numberOfTracks: 10,
    description: {
      english: `Alison was released in October 1996. The video clip of my hit single in this album was named "Best Video Clip of the Year" in its time. This album gets many requests to this day which has made consider re-editing it.<br/><br/>Alison is the name of my first born child, and this album was dedicated to him. My hit single from this album is also titled "Alison" which is a song specifically about him.`,
      french: `"Álison" est sorti en octobre 1996. Le clip vidéo de mon single à succès dans cet album a été nommé C clip vidéo de l'année" en son temps. Cet album reçoit de nombreuses demandes à ce jour qui a fait envisager de le rééditer.<br/><br/>"Álison" est le nom de mon premier-né et cet album lui est dédié. Mon single à succès de cet album est également intitulé "Álison" qui est une chanson qui le concerne spécifiquement.`,
      portuguese: `O segundo álbum "Álison" foi lançado em Outubro de 1996. O vídeo do grande sucesso "Intumba" foi nomeado "o melhor vídeo-clip do ano" em 1997. Este álbum é muito requisitado até aos dias de hoje, por isso tenho reconsiderado a sua re-edição.<br/><br/>"Álison" é o nome do meu primogénito a quem dediquei o disco, por ter sido pai solteiro. O grande sucesso deste álbum tem o seu próprio nome que fala da nossa história a dois.`,
      spanish: `Alison se lanzó en octubre de 1996. El videoclip de mi exitoso sencillo de este álbum fue nombrado "Mejor videoclip del año" en su momento. Este álbum recibe muchas solicitudes hasta el día de hoy, lo que me ha hecho considerar reeditarlo.<br/><br/>Alison es el nombre de mi hijo primogénito, y este álbum fue dedicado a él. Mi sencillo de éxito de este álbum también se titula "Alison", que es una canción específicamente sobre él.`,
      german: `Alison wurde im Oktober 1996 veröffentlicht. Der Videoclip zu meiner Hitsingle aus diesem Album wurde seinerzeit zum "Besten Videoclip des Jahres" gekürt. Dieses Album erhält bis heute viele Anfragen, was mich dazu veranlasst hat, eine Neuauflage in Betracht zu ziehen.<br/><br/>Alison ist der Name meines erstgeborenen Kindes, und dieses Album wurde ihm gewidmet. Meine Hit-Single aus diesem Album heißt ebenfalls "Alison" und ist ein Lied, das speziell ihm gewidmet ist.`,
    },

    links: {
      spotify: `https://open.spotify.com/album/3cvhEM9JrQSlmFzzlBUoGD?referral=labelaffiliate&utm_source=1100lvUfs3Pn&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
      apple: `https://music.apple.com/us/album/%C3%A1lison/1595389801?uo=4`,
      amazon: `https://www.amazon.com/gp/product/B09LSR2CQC`,
      deezer: `https://open.spotify.com/album/3cvhEM9JrQSlmFzzlBUoGD?referral=labelaffiliate&utm_source=1100lvUfs3Pn&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
    },
  },

  {
    name: 'discernimento',
    order: '3rd',
    releaseYear: 2004,
    numberOfTracks: 15,
    description: {
      english: `Discernimento was released in June 2004. This was my toughest work yet, a project of 4 years, from writing to recording and releasing.<br/><br/>In this album I gathered some prestigious names in the music world, each in their own country.It was a great challenge, but a lot of fun. This album introduced me to the world of Afro Jazz where i plan to expand in the near future.`,
      french: `"Discernimento" est sorti en juin 2004. Ce fut mon travail le plus difficile à ce jour, un projet de 4 ans, de l'écriture à l'enregistrement et la sortie.<br/><br/>Dans cet album, j'ai rassemblé des noms prestigieux du monde de la musique, chacun dans son propre pays. Ce fut un grand défi, mais très amusant. Cet album m'a fait découvrir le monde de l'Afrojazz où je compte m'étendre dans un avenir proche.`,
      portuguese: `"Discernimento" foi lançado em Junho de 2004. Este foi o meu trabalho mais difícil até agora, um projeto de 4 anos, desde a composição até a gravação e o lançamento.<br/><br/>Neste álbum, reuni alguns nomes de prestígio no mundo da música, cada um no seu próprio país. Foi um grande e fascinante desafio que me apresentou ao mundo do Afrojazz, onde me pretendo expandir no futuro imediato.`,
      spanish: `"Discernimento" fue lanzado en junio de 2004. Este fue mi trabajo más difícil hasta ahora, un proyecto de 4 años, desde la composición hasta la grabación y el lanzamiento.<br/><br/>En este álbum, reuní algunos nombres prestigiosos en el mundo de la música, cada uno en su propio país. Fue un gran y fascinante desafío que me presentó al mundo de Afrojazz, donde tengo la intención de expandirme en el futuro inmediato.`,
      german: `Discernimento wurde im Juni 2004 veröffentlicht. Dies war meine bisher härteste Arbeit, ein Projekt von 4 Jahren, vom Schreiben bis zur Aufnahme und Veröffentlichung.<br/></br>Für dieses Album habe ich einige renommierte Namen der Weltmusik zusammengebracht, jeder in seinem eigenen Land. Es war eine große Herausforderung, aber es hat auch viel Spaß gemacht. Dieses Album hat mich in die Welt des Afro Jazz eingeführt, die ich in naher Zukunft weiter ausbauen möchte.`,
    },

    links: {
      spotify: `https://open.spotify.com/album/5Mtuq8olBMSvTZUbj95f0m?referral=labelaffiliate&utm_source=1100lvUfsntK&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
      apple: `https://music.apple.com/us/album/discernimento-1/1597831242?uo=4`,
      amazon: `https://www.amazon.com/gp/product/B09MR8YYMD`,
      deezer: `https://www.deezer.com/en/album/276362062`,
    },
  },

  {
    name: 'best-of',
    order: '4th',
    releaseYear: 2016,
    numberOfTracks: 10,
    description: {
      english: `Best Of was released in December 2016. 12 years have passed since my last released, because during this time period I was involved in many other things other than making music, such as businesses and even producing others.<br/><br/>So to reboot my discographical career and to reappear in the market, I made a collection of songs from my 3 albums, which were reproduced and remade, with some new features from members of the music group "Kassav".`,
      french: `"Best Of" est sorti en décembre 2016, 12 ans après mon dernier album, car durant cette période j'ai été impliqué dans des événements et des productions musicales d'autres artistes.<br/><br/>Donc, pour reprendre ma carrière de disque et réapparaître sur le marché, j'ai fait une collection de chansons de mes albums très demandés, qui ont été refaites avec la participation des plusieurs membres du groupe musical "Kassav".`,
      portuguese: `"Best Of" foi lançado em Dezembro de 2016, 12 anos depois do meu último disco, pois durante esse período estive envolvido em eventos e produções musicais de outros artistas.<br/><br/>Então, para reiniciar minha carreira discográfica e reaparecer no mercado, fiz uma coleção de músicas dos meus álbuns muito solicitados, que foram refeitas com recurso aos membros do grupo musical "Kassav".`,
      spanish: `"Best Of" fue lanzado en diciembre de 2016, 12 años después de mi último álbum, porque durante ese período estuve involucrado en eventos y producciones musicales de otros artistas.<br/><br/>Entonces, para reiniciar mi carrera discográfica y reaparecer en el mercado, hice una colección de canciones de mis álbumes tan solicitados, que se rehicieron utilizando los miembros del grupo musical "Kassav".`,
      german: `Best Of wurde im Dezember 2016 veröffentlicht. 12 Jahre sind seit meiner letzten Veröffentlichung vergangen, denn während dieser Zeit war ich in viele andere Dinge als Musikmachen involviert, wie z.B. Geschäfte und sogar andere Produktionen.<br/><br/>Um meine Karriere neu zu starten und auf dem Markt wieder aufzutauchen, habe ich eine Sammlung von Songs aus meinen drei Alben zusammengestellt, die reproduziert und neu bearbeitet wurden, mit einigen neuen Features von Mitgliedern der Musikgruppe "Kassav".`,
    },

    links: {
      spotify: `https://open.spotify.com/album/4GEvB2ILoxswhRmqHUrHDF?referral=labelaffiliate&utm_source=1100lvUfspoE&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate`,
      apple: `https://music.apple.com/us/album/best-of/1603673852?uo=4`,
      amazon: `https://www.amazon.com/gp/product/B09PVPXJC8`,
      deezer: `https://www.deezer.com/en/album/285638162
      `,
    },
  },
];

/****************************************
     BIOGRAPHY INFORMATION
****************************************/
const years = () => new Date().getFullYear() - 1985;

export const biography = {
  whoAmI: {
    title: {
      english: `who am i`,
      french: `qui suis je`,
      portuguese: `quem sou eu`,
      spanish: `quién soy`,
      german: `wer bin ich`,
    },

    description: {
      english: `My name is Helder Tavares, better known as "Derito". I am an Angolan song writer and composer who aims to expose the Angolan music past its borders and show people the quality of our roots. Its been ${years()} years (1985) and i hope to continue for much longer.`,
      french: `Je m'appelle Helder Tavares, mieux connu sous le nom de "Derito". Je suis un auteur-compositeur angolais qui vise à exposer la musique angolaise au-delà de ses frontières et à montrer aux gens la qualité de nos racines. Cela fait de ${years()} ans et j'espère continuer encore longtemps.`,
      portuguese: `Meu nome é Helder Tavares, mais conhecido por "Derito". Sou autor e compositor angolano que pretende expor a música angolana além fronteiras e mostrar às pessoas a qualidade das nossas raízes. Faz ${years()} anos e espero continuar por muito mais tempo.`,
      spanish: `Mi nombre es Helder Tavares, más conocido como "Derito". Soy autor y compositor angoleño que pretende exponer la música angoleña más allá de sus fronteras y mostrarle a la gente la calidad de nuestras raíces. Han pasado ${years()} años y espero continuar por mucho más tiempo.`,
      german: `Mein Name ist Helder Tavares, besser bekannt als "Derito". Ich bin ein angolanischer Liedermacher und Komponist, der die angolanische Musik über ihre Grenzen hinaus bekannt machen und den Menschen die Qualität unserer Wurzeln zeigen will. Es ist ${years()} Jahre her (1985) dabei und hoffe, dass ich noch viel länger weitermachen kann.`,
    },
  },

  earlyDays: {
    title: {
      english: `early days`,
      french: `premiers jours`,
      portuguese: `primeiros dias`,
      spanish: `primeros días`,
      german: `anfangszeit`,
    },

    description: {
      english: `I was born and raised in Benguela, Angola in August 1966. I migrated to Portugal in 1982 due to the ongoing war in Angola and was forced to adapt quickly in order to survive on my own. I eventually made a small band and started playing in bars (in 1985), alongside university. I managed to finish my course, but decided to pursue my new found passion as a full-time musician.`,
      french: `Je suis né et j'ai grandi à Benguela, en Angola, en août 1966. J'ai émigré au Portugal en 1982, en raison de la guerre en cours en Angola et j'ai été forcé de m'adapter rapidement pour survivre par moi-même.J'ai finalement formé un petit groupe et commencé à jouer dans des bars (en 1985), tout en étudiant à l'université. Mais il y a eu un moment où j'ai dû faire un choix entre mes études et la musique, et c'est là que j'ai décidé de devenir musicien à plein temps.`,
      portuguese: `Nasci e cresci em Benguela, Angola, em agosto de 1966. Emigrei para Portugal em 1982, devido à guerra em Angola e fui forçado a adaptar-me rapidamente para sobreviver sozinho.Acabei por formar uma pequena banda e comecei a tocar em bares (em 1985), a fim de custear os meus estudos universitários. Mas chegou um momento em que tive que fazer uma escolha entre os estudos e a música, e foi aí que decidi tornar-me músico em período integral`,
      spanish: `Nací y crecí en Benguela, Angola en agosto de 1966. Emigré a Portugal en 1982, debido a la guerra en curso en Angola y me vi obligado a adaptarme rápidamente para sobrevivir por mi cuenta. Finalmente hice una pequeña banda y comencé a tocar en bares (en 1985), mientras estudiaba en la universidad. Pero llegó un momento en que tuve que elegir entre mis estudios y la música, y fue cuando decidí convertirme en músico a tiempo completo.`,
      german: `Ich wurde im August 1966 in Benguela, Angola, geboren und wuchs dort auf. Wegen des andauernden Krieges in Angola wanderte ich 1982 nach Portugal aus und musste mich schnell anpassen, um allein zu überleben. Schließlich gründete ich eine kleine Band und begann (1985), neben dem Studium in Bars zu spielen. Ich schaffte es nicht, mein Studium zu beenden und beschloss, meiner neu entdeckten Leidenschaft als Vollzeitmusiker nachzugehen.`,
    },
  },

  myCareer: {
    title: {
      english: `my career`,
      french: `ma carrière`,
      portuguese: `minha carreira`,
      spanish: `mi carrera`,
      german: `meine karriere`,
    },

    description: {
      english: `I am the author of 4 albums between 1995 and 2016 (see discography for more details) and my career has been centered around them. I had the chance to meet some amazing musicians and people, travelled the world and seen different cultures, all while doing what I love to do. In 2006 I was Angola's representative in the football World Cup in Germany. In 2007 I composed the Anthem for the African Basketball Championship. In 2010 I was nominated the Ambassador for the Football African Cup of Nations and I composed 2 tracks for the competition.`,
      french: `Je suis l'auteur de quatre albums entre 1995 et 2016 (voir la discographie pour plus de détails) et ma carrière s'est centrée autour d'eux. J'ai eu la chance de rencontrer des musiciens et des gens incroyables, j'ai parcouru le monde et vu différentes cultures, tout en faisant ce que j'aime faire. En 2006, j’étais le représentant de l’Angola à la Coupe du monde de football en Allemagne. En 2007, j'ai composé l'hymne de l'équipe nationale angolaise de basket-ball pour le championnat d'Afrique. En 2010 j'ai été nommé Ambassadeur Musical Angolais pour la Coupe d'Afrique des Nations de football et j'ai composé 2 titres pour la compétition`,
      portuguese: `Sou autor de quatro álbuns entre 1995 e 2016 (veja a discografia para mais detalhes), tendo a minha carreira girado em torno deles.Tive a chance de conhecer músicos e pessoas incríveis, viajei pelo mundo e vi diferentes culturas, enquanto fazia o que eu amo fazer. Em 2006, fui representante de Angola na Copa do Mundo de futebol na Alemanha.Em 2007, compus o Hino para o campeonato africano de basquetebol. Em 2010 fui nomeado embaixador musical angolano na Taça das Nações Africanas de futebol e compus 2 faixas para a competição.`,
      spanish: `Soy autor de cuatro álbumes entre 1995 y 2016 (ver la discografía para más detalles) y mi carrera se ha centrado en ellos.Tuve la oportunidad de conocer a algunos músicos y personas increíbles, viajé por el mundo y vi diferentes culturas, todo mientras hacía lo que me encanta hacer. En 2006 fui representante de Angola en la Copa Mundial de fútbol en Alemania. En 2007 compuse el Himno para el equipo nacional de baloncesto de Angola, para el Campeonato Africano. En 2010 fui nominado Embajador Musical de Angola para la Copa Africana de Naciones de fútbol y compuse 2 pistas para la competencia.`,
      german: `Ich habe zwischen 1995 und 2016 vier Alben veröffentlicht (siehe Diskografie für weitere Details), und meine Karriere hat sich um diese Alben gedreht. Ich hatte die Gelegenheit, einige erstaunliche Musiker und Menschen zu treffen, die Welt zu bereisen und verschiedene Kulturen kennenzulernen, während ich das tat, was ich liebe. 2006 war ich Angolas Vertreter bei der Fußballweltmeisterschaft in Deutschland. 2007 komponierte ich die Hymne für die afrikanische Basketballmeisterschaft. 2010 wurde ich zum Botschafter für den Afrikanischen Fußball-Nationenpokal ernannt und habe 2 Titel für den Wettbewerb komponiert.`,
    },
  },
};

/****************************************
     FEATURES INFORMATION
****************************************/
export const features = [
  {
    name: 'Manu Dibango',
    id: `manu-dibango`,
    description: {
      english: `One of the greatest saxophonists in the world, Manu featured on one track on my 3rd album.`,
      french: `L'un des plus grands saxophonistes du monde, Manu figurait sur un morceau de mon 3ème album.`,
      portuguese: `Um dos maiores saxofonistas do mundo, Manu participou numa faixa do meu 3º álbum.`,
      spanish: `Manu, uno de los mejores saxofonistas del mundo, apareció en una pista de mi tercer álbum.`,
      german: `Manu, einer der größten Saxophonisten der Welt, ist auf einem Stück meines 3. Albums zu hören.`,
    },
  },

  {
    name: 'Hugh Masekela',
    id: `hugh-masekela`,
    description: {
      english: `A master of the trumpet, the great Hugh featured on 2 tracks in my 3rd album`,
      french: `Un maître de la trompette, le grand Hugh a enregistré sur 2 titres dans mon 3ème album`,
      portuguese: `Um mestre do trompete, o grande Hugh participou em duas faixas do meu 3º álbum`,
      spanish: `Un maestro de la trompeta, el gran Hugh grabó en 2 pistas en mi tercer álbum.`,
      german: `Der große Hugh Masekela, ein Meister der Trompete, ist auf 2 Titeln meines 3. Albums zu hören.`,
    },
  },

  {
    name: 'Jacob Desvarieux',
    id: `jacob-desvarieux`,
    description: {
      english: `The legend of Kassav', he featured on 2 songs on my 3rd album, and produced my entire 4th album.`,
      french: `La légende de Kassav', il a produit et enregistré 2 titres sur mon 3ème album, et produit l'intégralité de mon 4ème album.`,
      portuguese: `A lenda de Kassav' produziu e gravou duas músicas do meu 3º álbum, e produziu todo o meu 4º álbum.`,
      spanish: `La leyenda de Kassav', produjo y grabó 2 canciones en mi tercer álbum y produjo todo mi cuarto álbum.`,
      german: `Die Legende von Kassav', er war auf 2 Titeln meines 3. Albums zu hören und produzierte mein gesamtes 4.`,
    },
  },
  {
    name: 'Jean C. Naimro',
    id: `jean-naimro`,
    description: {
      english: ` A magician on the keyboard, Jean from Kassav featured on 4 tracks on my 4th album`,
      french: `Magicien au clavier, Jean de Kassav figurait sur 4 titres de mon 4ème album`,
      portuguese: `Um mágico no teclado, Jean do Kassav participou em 4 faixas do meu 4º álbum`,
      spanish: `Un mago en el teclado, Jean de Kassav grabó en 4 pistas en mi 4to álbum`,
      german: `Jean von Kassav ist ein Magier am Keyboard, der auf 4 Titeln meines 4. Albums zu hören ist.`,
    },
  },

  {
    name: 'Georges Decimus',
    id: `georges-decimus`,
    description: {
      english: `Known for his world class groove on the bass, Georges from Kassav featured on 4 tracks on my 4th album`,
      french: `Connu pour son groove de classe mondiale à la basse, Georges de Kassav a enregistré sur 4 titres sur mon 4ème album`,
      portuguese: `Conhecido por seu groove de classe mundial no baixo, Georges do Kassav gravou 4 faixas no meu 4º álbum`,
      spanish: `Conocido por su ritmo de clase mundial en el bajo, Georges de Kassav grabó en 4 pistas de mi cuarto álbum.`,
      german: `Georges von Kassav, bekannt für seinen Weltklasse-Groove am Bass, ist auf 4 Titeln meines 4. Albums zu hören.`,
    },
  },

  {
    name: 'Paulo Calasans',
    id: `paulo-calasans`,
    description: {
      english: `A master on the piano, the great Paulo featured on 2 tracks on my 3rd album.`,
      french: `Maître du piano, le grand Paulo a produit et enregistré sur 2 titres mon 3ème album.`,
      portuguese: `Um mestre no piano, o grande Paulo produziu e gravou 2 faixas no meu 3º álbum.`,
      spanish: `Un maestro en el piano, el gran Paulo produjo y grabó en 2 pistas de mi tercer álbum.`,
      german: `Ein Meister am Klavier, der große Paulo auf 2 Tracks auf meinem 3. Album.`,
    },
  },

  {
    name: 'Yura Silva',
    id: `yura-silva`,
    description: {
      english: `One of the greatest voices in the PALOP community, Yura featured on one track on my 4th album.`,
      french: `L'une des plus grandes voix de la communauté PALOP, Yura a participé sur un morceau de mon 4e album.`,
      portuguese: `Uma das maiores vozes da comunidade PALOP, Yura participou em uma faixa do meu 4º álbum.`,
      spanish: `Una de las mejores voces de la comunidad PALOP, Yura participó en una pista de mi cuarto álbum.`,
      german: `Eine der größten Stimmen in der PALOP-Community, Yura, war auf einem Track auf meinem vierten Album zu hören.`,
    },
  },

  {
    name: 'Simmons Massini',
    id: `simmons-massini`,
    description: {
      english: `A multi-talented world-class artist, he produced 3 tracks on my 3rd album`,
      french: `Un artiste de classe mondiale aux multiples talents, il a produit 3 titres sur mon 3ème album`,
      portuguese: `Um artista multitalentoso de classe mundial, produziu 3 faixas no meu 3º álbum`,
      spanish: `Un artista de clase mundial con múltiples talentos, produjo 3 pistas en mi tercer álbum.`,
      german: `Als vielseitiger Weltklasse-Künstler produzierte er 3 Tracks auf meinem 3. Album`,
    },
  },

  {
    name: 'Pedro Joia',
    id: `pedro-joia`,
    description: {
      english: `A portuguese legend on the guitar, Pedro featured on 1 track on my 3rd album`,
      french: `Légende portugaise de la guitare flamenca, Pedro a joué sur 1 titre de mon 3ème album`,
      portuguese: `Uma lenda portuguesa na guitarra flamenca, Pedro tocou em 1 faixa do meu 3º álbum`,
      spanish: `Una leyenda portuguesa de la guitarra flamenca, Pedro tocó en 1 pista de mi tercer álbum`,
      german: `Eine portugiesische Legende an der Gitarre, Pedro auf 1 Track auf meinem 3. Album`,
    },
  },
];

/****************************************
     EVENT INFORMATION
****************************************/
const setOrigin = (coorX, coorY) => {
  const x = coorX > 50 ? 'right' : 'left';
  let y;

  if (coorY >= 6 && coorY <= 36) y = 'top';
  else if (coorY >= 56 && coorY <= 89) y = 'bottom';
  else y = 'mid';
  return `${x}-${y}`;
};

export const events = [
  /************** Angola **************/
  {
    country: 'angola',
    direction: 'after',
    name: {default: 'angola'},
    coordinates: [47, 65],
    origin: setOrigin(47, 65),
    events: [
      {
        year: 1999,
        name: {
          english: 'New Decade Festival',
          french: 'Festival de la Nouvelle Décennie',
          portuguese: 'Festival da Nova Década',
          spanish: 'Festival Nueva Década',
          german: 'Festival des Neuen Jahrzehnts',
        },

        city: {default: 'luanda'},
      },

      {
        year: 2014,
        name: {default: 'Fenacult'},
        city: {default: 'luanda'},
      },

      {
        year: 2016,
        name: {default: 'Trienal'},
        city: {default: 'luanda'},
      },
    ],
  },

  /************** Brazil **************/
  {
    country: 'brazil',
    direction: 'before',
    name: {
      english: 'brazil',
      french: 'brésil',
      default: 'brasil',
    },

    coordinates: [22, 75],
    origin: setOrigin(22, 75),
    events: [
      {
        year: 2003,
        name: {
          english: 'Recording Album',
          french: "Enregistrement de l'album",
          portuguese: 'Gravação do Álbum',
          spanish: 'Grabación de Álbum',
          german: 'Aufnahme des Albums',
        },

        city: {
          default: 'rio',
          english: `rio de janeiro`,
          french: `rio de janeiro`,
          portuguese: `rio de janeiro`,
          spanish: `rio de janeiro`,
          german: `rio de janeiro`,
        },
      },
    ],
  },

  /************** Cape Verde **************/
  {
    country: 'cape',
    direction: 'after',
    name: {
      english: 'cape verde',
      french: 'cap-vert',
      portuguese: 'cabo verde',
      spanish: 'cabo verde',
      german: 'kap verde',
    },

    coordinates: [29, 49],
    origin: setOrigin(29, 49),
    events: [
      {
        year: 2003,
        name: {default: 'Praia Festival'},
        city: {default: 'praia'},
      },
    ],
  },

  /************** China **************/
  {
    country: 'china',
    direction: 'after',
    name: {default: 'china', french: 'chine'},
    coordinates: [91, 37],
    origin: setOrigin(91, 37),
    events: [
      {
        year: 2003,
        name: {default: 'Expo'},
        city: {default: 'shanghai', french: 'shanghaï', portuguese: 'xangai', german: 'schanghai'},
      },
    ],
  },

  /************** England **************/
  {
    country: 'england',
    direction: 'after',
    name: {
      english: 'uk',
      french: 'angleterre',
      portuguese: 'inglaterra',
      spanish: 'inglaterra',
      german: 'england',
    },
    coordinates: [38, 15],
    origin: setOrigin(38, 15),
    events: [
      {
        year: 2008,
        name: {default: 'Queen Elizabeth Hall'},
        city: {default: 'london', french: 'londres', portuguese: 'londres', spanish: 'londres'},
      },

      {
        year: 2015,
        name: {default: 'Africa Oye Festival'},
        city: {default: 'liverpool'},
      },

      {
        year: 2017,
        name: {default: 'Global Rhythm Festival'},
        city: {default: 'ipswich'},
      },
    ],
  },

  /************** France **************/
  {
    country: 'france',
    direction: 'after',
    name: {default: 'france', portuguese: 'frança', spanish: 'francia', german: 'frankreich'},
    coordinates: [40, 24],
    origin: setOrigin(40, 24),
    events: [
      {
        year: '2002 & 2016',
        name: {
          english: 'Recording Album',
          french: "Enregistrement de l'album",
          portuguese: 'Gravação do Álbum',
          spanish: 'Grabación de Álbum',
          german: 'Aufnahme des Albums',
        },
        city: {default: 'paris'},
      },
    ],
  },

  /************** Germany **************/
  {
    country: 'germany',
    direction: 'after',
    name: {
      english: 'germany',
      french: 'allemagne',
      portuguese: 'alemanha',
      spanish: 'alemania',
      german: 'deutschland',
    },
    coordinates: [49, 21],
    origin: setOrigin(49, 21),
    events: [
      {
        year: 2006,
        name: {
          english: 'World Cup Festival',
          french: 'Fête de la coupe du monde',
          portuguese: 'Festival da Copa do Mundo',
          spanish: 'Fiesta de la Copa del Mundo',
          german: 'WM-Fest',
        },
        city: {default: 'hanover'},
      },
    ],
  },

  /************** Holland **************/
  {
    country: 'holland',
    direction: 'before',
    name: {
      english: 'Netherlands',
      french: 'hollande',
      portuguese: 'holanda',
      spanish: 'holanda',
      german: 'niederlande',
    },
    coordinates: [44, 20],
    origin: setOrigin(44, 20),
    events: [
      {
        year: 1998,
        name: {default: 'concert', portuguese: 'concerto', spanish: 'concierto', german: 'Konzert'},
        city: {default: 'amsterdam'},
      },
    ],
  },

  /************** Mozambique **************/
  {
    country: 'mozambique',
    direction: 'before',
    name: {default: 'mozambique', portuguese: 'moçambique', german: 'mosambik'},
    coordinates: [59.5, 72.5],
    origin: setOrigin(59.5, 72.5),
    events: [
      {
        year: 1997,
        name: {
          english: 'Promotional Tour',
          french: 'Visite promotionnelle',
          portuguese: 'Tour promocional',
          spanish: 'Tour Promocional',
          german: 'Werbetour',
        },
        city: {default: 'maputo'},
      },
    ],
  },

  /************** Namibia **************/
  {
    country: 'namibia',
    direction: 'after',
    name: {default: 'namibia'},
    coordinates: [48, 78],
    origin: setOrigin(48, 78),
    events: [
      {
        year: 1997,
        name: {
          default: 'Festival Internacional de Jazz',
          english: 'International Jazz Festival',
          german: 'Internationales Jazzfestival',
        },
        city: {default: 'windhoek'},
      },
    ],
  },

  /************** Portugal **************/
  {
    country: 'portugal',
    direction: 'after',
    name: {default: 'portugal'},
    coordinates: [36.5, 29],
    origin: setOrigin(36.5, 29),
    events: [
      {
        year: 1998,
        name: {default: 'Expo'},
        city: {
          default: 'lisbon',
          english: 'lisbon',
          french: 'lisbonne',
          portuguese: 'lisboa',
          spanish: 'lisboa',
          german: 'lisbonne',
        },
      },
    ],
  },

  /************** South Africa **************/
  {
    country: 'southAfrica',
    direction: 'before',
    name: {
      english: 'south africa',
      french: 'afrique du sud',
      portuguese: 'África Do Sul',
      spanish: 'sudáfrica',
      german: 'südafrika',
    },
    coordinates: [56, 83],
    origin: setOrigin(56, 83),
    events: [
      {
        year: 2002,
        name: {
          english: 'Recording Album',
          french: "Enregistrement de l'album",
          portuguese: 'Gravação do Álbum',
          spanish: 'Grabación de Álbum',
          german: 'Aufnahme des Albums',
        },
        city: {default: 'johannesburg', portuguese: 'joanesburgo', spanish: 'johannesburgo'},
      },
    ],
  },

  /************** Switzerland **************/
  {
    country: 'switzerland',
    direction: 'after',
    name: {
      english: 'switzerland',
      french: 'suisse',
      portuguese: 'suíça',
      spanish: 'suiza',
      german: 'schweiz',
    },
    coordinates: [45.5, 24],
    origin: setOrigin(45.5, 24),
    events: [
      {
        year: 1991,
        name: {
          english: 'Peace Festival',
          french: 'Fête de la Paix',
          portuguese: 'Festival da Paz',
          spanish: 'Fiesta de la Paz',
          german: 'Friedensfest',
        },
        city: {
          default: 'geneva',
          french: 'genève',
          portuguese: 'genebra',
          spanish: 'ginebra',
          german: 'genf',
        },
      },
    ],
  },
];
