import { Hero } from './hero';

export const HEROES: Hero[] = [
  {
    id: 1,
    name: "Aragorn Elessar",
    unique: "Aragorn",
    points: 260,
    wargear: ['Heavy Armour', 'Anduril'],
    options: [
      {
        name: "Armoured Horse",
        points: 15,
      }
    ],
    rules: [
      {
        name: 'Mighty Hero',
        explanation: 'Aragorn may expend one point of might per turn without depleting his store.'
      }
    ],
    Move: '6',
    Fight: '6',
    Shoot: '3',
    Strength: '4',
    Defense: '7',
    Attacks: '3',
    Wounds: '3',
    Courage: '6',
    Might: '3',
    Will: '3',
    Fate: '3',
    imageUrl: "http://vignette3.wikia.nocookie.net/gamesworkshop/images/7/7c/Aragorn%E2%80%94foot_and_mount.jpeg/revision/latest?cb=20120421214620"
  },
  {
    id: 2,
    name: "Faramir, Captain of Gondor",
    unique: "Faramir",
    points: 70,
    wargear: ['Armour'],
    options: [
      {
        name: "Armoured Horse",
        points: 15,
      },
      {
        name: "Horse",
        points: 10
      },
      {
        name: "Heavy Armour",
        points: 5
      },
      {
        name: "Bow",
        points: 5
      },
      {
        name: "Lance",
        points: 5
      },
      {
        name: "Shield",
        points: 5
      },
    ],
    Move: '6',
    Fight: '5',
    Shoot: '3',
    Strength: '4',
    Defense: '5',
    Attacks: '2',
    Wounds: '2',
    Courage: '5',
    Might: '3',
    Will: '2',
    Fate: '2',
    imageUrl: "https://www.games-workshop.com/resources/catalog/product/600x620/99061464085_FaramirFoodandMountedNEW01.jpg"
  },
  {
    id: 3,
    name: "Peregrin, Guard of the Citadel",
    unique: "Peregrin",
    points: 25,
    wargear: ['Armour'],
    options: [
      {
        name: "Elven Cloak",
        points: 10,
      },
      {
        name: "Pony",
        points: 5
      }
    ],
    rules: [
      {
        name: 'Resistant to Magic',
        explanation: 'See main rules.'
      },
      {
        name: 'Throw Stones',
        explanation: 'See main rules.'
      }
    ],
    Move: '4',
    Fight: '3',
    Shoot: '3',
    Strength: '2',
    Defense: '4',
    Attacks: '1',
    Wounds: '1',
    Courage: '4',
    Might: '1',
    Will: '1',
    Fate: '2',
    imageUrl: "https://s-media-cache-ak0.pinimg.com/736x/72/1a/9a/721a9a2e5b3ab327316633d48d48fdfb.jpg"
  },
  {
    id: 4,
    name: "Boromir, Captain of the White Tower",
    unique: "Boromir",
    points: 175,
    wargear: ['Heavy Armour', 'The Horn of Gondor'],
    options: [
      {
        name: "The Banner of Minas Tirith",
        points: 50,
      },
      {
        name: "Horse",
        points: 10
      },
      {
        name: "Lance",
        points: 5
      },
      {
        name: "Shield",
        points: 5
      },
    ],
    rules: [
      {
        name: 'The Horn of Gondor',
        explanation: `
          Boromir can blow the horn at the start of a fight 
          if he is outnumbered by 2-1 or more. The enemy 
          with the highest courage must test. If passed, 
          fight as normal, otherwise, Boromir wins and can 
          strike blows.
          `
      },
      {
        name: 'The Banner of Minas Tirith',
        explanation: `
          Counts as a banner. When carried, all Gondor 
          units within 3" receive +1 bonus to their 
          fight value, including Boromir (other heroes
          do not). Boromir suffers no -1 fight penalty
           for wielding a banner.
        `
      }
    ],
    Move: '6',
    Fight: '6',
    Shoot: '4',
    Strength: '4',
    Defense: '6',
    Attacks: '3',
    Wounds: '3',
    Courage: '6',
    Might: '6',
    Will: '3',
    Fate: '3',
    imageUrl: "http://i122.photobucket.com/albums/o262/Viruk_pl/Mitril/borek.jpg~original"
  },
  {
    id: 5,
    name: "Madril, Captain of Ithilien",
    unique: "Madril",
    points: 55,
    wargear: ['Armour', 'Bow'],
    rules: [
      {
        name: 'Master of Ambush',
        explanation: `
          In games where you roll for reinforcements, 
          you receive +1 bonus if Madril is on the 
          board. If not, only Madrils warband receives 
          the bonus.
          `
      }
    ],
    Move: '6',
    Fight: '4',
    Shoot: '3',
    Strength: '4',
    Defense: '5',
    Attacks: '2',
    Wounds: '2',
    Courage: '4',
    Might: '3',
    Will: '1',
    Fate: '1',
    imageUrl: "http://www.karoath.com/graphics/gallery/lotr/madril-a1.jpg"
  },
  {
    id: 6,
    name: "Damrod, Ranger of Ithilien",
    unique: "Damrod",
    points: 20,
    wargear: ['Armour', 'Bow'],
    Move: '6',
    Fight: '4',
    Shoot: '3',
    Strength: '4',
    Defense: '5',
    Attacks: '1',
    Wounds: '1',
    Courage: '4',
    Might: '1',
    Will: '1',
    Fate: '1',
    imageUrl: "https://www.games-workshop.com/resources/catalog/product/600x620/99061464031_FaramirandDamrodNEW01.jpg"
  },
  {
    id: 7,
    name: "Denethor, Steward of Gondor",
    unique: "Denethor",
    points: 30,
    wargear: ['Armour'],
    rules: [
      {
        name: 'Broken Mind',
        explanation: `
          At the start of each turn, before priority, 
          Denethor must take a courage test. If he 
          passes he may act normally. If he fails, 
          he is treated as an enemy model except no 
          Good troops may target or harm him.
          `
      }
    ],
    Move: '6',
    Fight: '5',
    Shoot: '4',
    Strength: '4',
    Defense: '5',
    Attacks: '2',
    Wounds: '2',
    Courage: '5',
    Might: '0',
    Will: '3',
    Fate: '0',
    imageUrl: "http://hobbyworld.com.ua/published/publicdata/HOBBYWOR/attachments/SC/products_pictures/m1180613_99061464035_GoodDenethorMain_873x627_enl.jpg"
  },
  {
    id: 8,
    name: "Beregond of Gondor",
    unique: "Beregond",
    points: 25,
    wargear: ['Heavy Armour', 'Longbow'],
    options: [{
      name: "Horse",
      points: 6,
    }],
    rules: [
      {
        name: 'Bodyguard',
        explanation: `
          Pick one hero in your army, as long as this
          model is alive, all models with the 
          Bodyguard special rule automatically pass 
          all courage tests they have to take.
        `
      }
    ],
    Move: '6',
    Fight: '4',
    Shoot: '3',
    Strength: '4',
    Defense: '6',
    Attacks: '1',
    Wounds: '1',
    Courage: '4',
    Might: '1',
    Will: '1',
    Fate: '1',
    imageUrl: "http://www.coolminiornot.com/pics/pics16/img522321bc2682a.jpg"
  },
  {
    id: 9,
    name: "Cirion, Lieutenant of Amon Barad",
    unique: "Cirion",
    points: 55,
    wargear: ['Armour', 'Shield'],
    rules: [
      {
        name: 'Boldest of the Bold',
        explanation: `
          When attempting to charge an 
          enemy that causes Terror, 
          Cirion receives a +2 bonus 
          to his Courage.
        `
      }
    ],
    Move: '6',
    Fight: '4',
    Shoot: '4',
    Strength: '4',
    Defense: '6',
    Attacks: '2',
    Wounds: '2',
    Courage: '4',
    Might: '3',
    Will: '1',
    Fate: '1',
    imageUrl: "http://farm5.static.flickr.com/4086/5071035018_24e5877191_m.jpg"
  },
  {
    id: 10,
    name: "Knight of the White Tower",
    points: 55,
    wargear: ['Heavy Armour', 'White Sword of Gondor'],
    rules: [
      {
        name: 'White Sword of Gondor',
        explanation: `
          A White Sword is a two-handed weapon. 
          Additionally, each Wound infliced by 
          a White Sword (after Fate rolls) 
          causes two wounds, instead of one.
        `
      }
    ],
    Move: '6',
    Fight: '5',
    Shoot: '4',
    Strength: '4',
    Defense: '6',
    Attacks: '2',
    Wounds: '2',
    Courage: '4',
    Might: '1',
    Will: '1',
    Fate: '1',
    imageUrl: "http://4.bp.blogspot.com/-UOY87KR4wfc/UXibL6mrAaI/AAAAAAAAAZw/Gw0gQgcW6NM/s1600/20130424_212650_HDR.jpg"
  },
  {
    id: 11,
    name: "Captain of Minas Tirith",
    points: 50,
    wargear: ['Armour'],
    options: [
      {
        name: "Horse",
        points: 10
      },
      {
        name: "Bow",
        points: 5
      },
      {
        name: "Lance",
        points: 5
      },
      {
        name: "Shield",
        points: 5
      }
    ],
    Move: '6',
    Fight: '4',
    Shoot: '4',
    Strength: '4',
    Defense: '6',
    Attacks: '2',
    Wounds: '2',
    Courage: '4',
    Might: '2',
    Will: '1',
    Fate: '1',
    imageUrl: "https://c2.staticflickr.com/4/3058/5715517454_16682a0628.jpg"
  },
  {
    id: 12,
    name: "King of Men",
    points: 60,
    wargear: ['Armour'],
    options: [
      {
        name: "Armoured Horse",
        points: 15
      },
      {
        name: "Horse",
        points: 10
      },
      {
        name: "Heavy Armour",
        points: 5
      },
      {
        name: "Lance",
        points: 5
      },
      {
        name: "Shield",
        points: 5
      },
    ],
    Move: '6',
    Fight: '5',
    Shoot: '4',
    Strength: '4',
    Defense: '5',
    Attacks: '2',
    Wounds: '2',
    Courage: '5',
    Might: '2',
    Will: '2',
    Fate: '1',
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/216WWXPDR6L.jpg"
  },
];