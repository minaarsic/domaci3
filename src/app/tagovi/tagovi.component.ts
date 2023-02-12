import { Component,OnInit } from '@angular/core';
import { UslugeService } from '../servisi/usluge.service';
import { Tag } from '../Tag';
@Component({
  selector: 'app-tagovi',
  templateUrl: './tagovi.component.html',
  styleUrls: ['./tagovi.component.css']
})
export class TagoviComponent implements OnInit{
tagovi:Tag[]=[];
constructor(private uslugeServis:UslugeService){

}
ngOnInit(): void {
  this.tagovi=this.uslugeServis.getAllTags();
}
}
