import { Injectable } from '@angular/core';
import { Tag } from '../Tag';
import { Usluga } from '../usluga';
@Injectable({
  providedIn: 'root'
})
export class UslugeService {

  constructor() { }
  getAllUslugeBySearchTerm(searchTerm:string):Usluga[]{
    return this.getAll().filter(usluga=>usluga.naslov.toLowerCase().
    includes(searchTerm.toLowerCase()));
    }
    getAllTags():Tag[]{
     return[
      {ime:'Sve',broj: 1},
      {ime:'Promo-usluge',broj: 2},
      {ime:'Standardne-usluge',broj: 2},
    
    ];
    }
    getAllUslugeByTag(tag:string):Usluga[]{
      return tag=="Sve"?this.getAll():
      this.getAll().filter(usluga=>usluga.tagovi?.includes(tag));
  
    }
    getAll():Usluga[]{
      return[
        {id:1,
          naslov: "Sisanje",
          cena: ['1000din','1200din','1500din'],
          slika:'.../../assets/slike/kratka.jpeg',
        opis:"aaaaa",
        tagovi:['Promo-usluge', 'Standardne-usluge'],
        zakazan:false
        },
        {id:2,
          naslov: "Farbanje",
          cena: ['1000din','1200din','1500din'],
          slika:'.../../assets/slike/farbanje.jpg',
        opis:"aaaaa",
        tagovi:['Promo-usluge', 'Standardne-usluge'],
        zakazan:true
        },
        {id:3,
          naslov: "Svecana frizura",
          cena: ['1000din','1200din','1500din'],
          slika:'.../../assets/slike/pundja.jpeg',
        opis:"aaaaa",
        tagovi:['Promo-usluge'],
        zakazan:true
        },
        {id:4,
          naslov: "Pletenice",
          cena: ['1000din','1200din','1500din'],
          slika:'.../../assets/slike/pletenice.jpeg',
        opis:"aaaaa",
        tagovi:['Promo-usluge'],
        zakazan:false
        },
        {id:5,
          naslov: "Baleyage",
          cena: ['1000din','1200din','1500din'],
          slika:'.../../assets/slike/balezage.jpeg',
        opis:"aaaaa",
        tagovi:[ 'Standardne-usluge'],
        zakazan:true
        },
        {id:6,
          naslov: "Feniranje",
          cena: ['1000din','1200din','1500din'],
          slika:'.../../assets/slike/feniranje.jpg',
        opis:"aaaaa",
        tagovi:['Promo-usluge', 'Standardne-usluge'],
        zakazan:true
        },
      ]
    }
}
