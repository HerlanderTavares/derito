import {timer} from './helper.js';

/****************************************
     ALBUM INFORMATION
****************************************/
import saudadeImg from 'url:../imgs/03-albums/saudade.jpg';
import alisonImg from 'url:../imgs/03-albums/alison.jpg';
import discernimentoImg from 'url:../imgs/03-albums/discernimento.jpg';
import bestOfImg from 'url:../imgs/03-albums/best-of.jpg';

export const albums = [
  {
    name: 'saudade',
    img: saudadeImg,
    order: '1st',
    releaseYear: 1995,
    numberOfTracks: 8,
    description: {
      english: `Saudade was my first album, which was released in July 1995. This album was the best seller in Angola in its time and i am still remembered and known by my best hits from this album.<br/><br/>Saudade, meaning "to miss", was made in remembrance of my childhood and my country, more specifically my city Benguela. Because of the on going war, I had to migrate to Portugal, leaving family and friends behind to fend off on my own at the age of 16.`,
      french: `"Saudade" a été mon premier album, qui est sorti en juillet 1995. Cet album était le best-seller en Angola en son temps et je suis encore connu par mes meilleurs morceaux de cet album.<br/><br/>"Saudade" qui signifie "manquer", a été faite en souvenir de mon enfance et de mon pays, plus précisément ma ville Benguela. En raison de la guerre en cours, j'ai dû émigrer au Portugal, laissant ma famille et mes amis derrière moi pour me débrouiller seul à l'âge de 16 ans.`,
      portuguese: `"Saudade" foi o meu primeiro álbum, lançado em Julho de 1995, tendo sido o mais vendido em Angola naquela altura, onde sou lembrado e me tornei conhecido pelos grandes sucessos que se tornaram clássicos da música angolana.<br/><br/>"Saudade", foi feito pela vivência da minha infância e adolescência em Benguela. Por causa da guerra em curso, em 1982 tive que deixar família e amigos para trás aos 16 anos de idade, com o principal objetivo de tirar um curso superior sem interrupções.`,
      spanish: `"Saudade" fue mi primer álbum, lanzado en julio de 1995, después de haber sido el best seller en Angola en ese momento, donde soy recordado y conocido por los grandes éxitos que se han convertido en clásicos de la música angoleña.<br/><br/>"Saudade", fue hecha por la experiencia de mi infancia y adolescencia en Benguela. Debido a la guerra en curso, en 1982 tuve que dejar atrás a familiares y amigos a la edad de 16 años, con el objetivo principal de obtener un título universitario sin interrupción.`,
      german: ``,
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
    img: alisonImg,
    order: '2nd',
    releaseYear: 1996,
    numberOfTracks: 10,
    description: {
      english: `Alison was released in October 1996. The video clip of my hit single in this album was named "Best Video Clip of the Year" in its time. This album gets many requests to this day which has made consider re-editing it.<br/><br/>Alison is the name of my first born child, and this album was dedicated to him. My hit single from this album is also titled "Alison" which is a song specifically about him.`,
      french: `"Álison" est sorti en octobre 1996. Le clip vidéo de mon single à succès dans cet album a été nommé C clip vidéo de l'année" en son temps. Cet album reçoit de nombreuses demandes à ce jour qui a fait envisager de le rééditer.<br/><br/>"Álison" est le nom de mon premier-né et cet album lui est dédié. Mon single à succès de cet album est également intitulé "Álison" qui est une chanson qui le concerne spécifiquement.`,
      portuguese: `O segundo álbum "Álison" foi lançado em Outubro de 1996. O vídeo do grande sucesso "Intumba" foi nomeado "o melhor vídeo-clip do ano" em 1997. Este álbum é muito requisitado até aos dias de hoje, por isso tenho reconsiderado a sua re-edição.<br/><br/>"Álison" é o nome do meu primogénito a quem dediquei o disco, por ter sido pai solteiro. O grande sucesso deste álbum tem o seu próprio nome que fala da nossa história a dois.`,
      spanish: `Alison se lanzó en octubre de 1996. El videoclip de mi exitoso sencillo de este álbum fue nombrado "Mejor videoclip del año" en su momento. Este álbum recibe muchas solicitudes hasta el día de hoy, lo que me ha hecho considerar reeditarlo.<br/><br/>Alison es el nombre de mi hijo primogénito, y este álbum fue dedicado a él. Mi sencillo de éxito de este álbum también se titula "Alison", que es una canción específicamente sobre él.`,
      german: ``,
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
    img: discernimentoImg,
    order: '3rd',
    releaseYear: 2004,
    numberOfTracks: 15,
    description: {
      english: `Discernimento was released in June 2004. This was my toughest work yet, a project of 4 years, from writing to recording and releasing.<br/><br/>In this album I gathered some prestigious names in the music world, each in their own country.It was a great challenge, but a lot of fun. This album introduced me to the world of Afro Jazz where i plan to expand in the near future.`,
      french: `"Discernimento" est sorti en juin 2004. Ce fut mon travail le plus difficile à ce jour, un projet de 4 ans, de l'écriture à l'enregistrement et la sortie.<br/><br/>Dans cet album, j'ai rassemblé des noms prestigieux du monde de la musique, chacun dans son propre pays. Ce fut un grand défi, mais très amusant. Cet album m'a fait découvrir le monde de l'Afrojazz où je compte m'étendre dans un avenir proche.`,
      portuguese: `"Discernimento" foi lançado em Junho de 2004. Este foi o meu trabalho mais difícil até agora, um projeto de 4 anos, desde a composição até a gravação e o lançamento.<br/><br/>Neste álbum, reuni alguns nomes de prestígio no mundo da música, cada um no seu próprio país. Foi um grande e fascinante desafio que me apresentou ao mundo do Afrojazz, onde me pretendo expandir no futuro imediato.`,
      spanish: `"Discernimento" fue lanzado en junio de 2004. Este fue mi trabajo más difícil hasta ahora, un proyecto de 4 años, desde la composición hasta la grabación y el lanzamiento.<br/><br/>En este álbum, reuní algunos nombres prestigiosos en el mundo de la música, cada uno en su propio país. Fue un gran y fascinante desafío que me presentó al mundo de Afrojazz, donde tengo la intención de expandirme en el futuro inmediato.`,
      german: ``,
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
    img: bestOfImg,
    order: '4th',
    releaseYear: 2016,
    numberOfTracks: 10,
    description: {
      english: `Best Of was released in December 2016. 12 years have passed since my last released, because during this time period I was involved in many other things other than making music, such as businesses and even producing others.<br/><br/>So to reboot my discographical career and to reappear in the market, I made a collection of songs from my 3 albums, which were reproduced and remade, with some new features from members of the music group "Kassav".`,
      french: `"Best Of" est sorti en décembre 2016, 12 ans après mon dernier album, car durant cette période j'ai été impliqué dans des événements et des productions musicales d'autres artistes.<br/><br/>Donc, pour reprendre ma carrière de disque et réapparaître sur le marché, j'ai fait une collection de chansons de mes albums très demandés, qui ont été refaites avec la participation des plusieurs membres du groupe musical "Kassav".`,
      portuguese: `"Best Of" foi lançado em Dezembro de 2016, 12 anos depois do meu último disco, pois durante esse período estive envolvido em eventos e produções musicais de outros artistas.<br/><br/>Então, para reiniciar minha carreira discográfica e reaparecer no mercado, fiz uma coleção de músicas dos meus álbuns muito solicitados, que foram refeitas com recurso aos membros do grupo musical "Kassav".`,
      spanish: `"Best Of" fue lanzado en diciembre de 2016, 12 años después de mi último álbum, porque durante ese período estuve involucrado en eventos y producciones musicales de otros artistas.<br/><br/>Entonces, para reiniciar mi carrera discográfica y reaparecer en el mercado, hice una colección de canciones de mis álbumes tan solicitados, que se rehicieron utilizando los miembros del grupo musical "Kassav".`,
      german: ``,
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
