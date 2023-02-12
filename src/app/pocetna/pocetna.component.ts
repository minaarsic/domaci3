import { Component, Input, OnInit } from '@angular/core';
import { UslugeService } from '../servisi/usluge.service';
import { Usluga } from '../usluga';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent  implements OnInit{
  naslov='Katalog usluga';
  ProcitajVise:boolean=true;
  visible:boolean=false;
   buttonClick=true;
       
  usluge: Usluga[]=[];
  constructor(private uslugeServis:UslugeService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
        this.usluge=this.uslugeServis.getAllUslugeBySearchTerm(params['searchTerm']);
      else if(params['tag'])
      this.usluge=this.uslugeServis.getAllUslugeByTag(params['tag']);
      else
        this.usluge=this.uslugeServis.getAll();

    })

  }
  onClick(){
    this.ProcitajVise=!this.ProcitajVise;
    this.visible=!this.visible ;
    }

}
