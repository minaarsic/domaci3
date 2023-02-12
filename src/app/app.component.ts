import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'salon';
  naslov='Katalog usluga';
  isMenuOpened: boolean=false;

  toggleMenu(): void
{
  this.isMenuOpened=!this.isMenuOpened;
}
ClickedOutside():void{
  this.isMenuOpened=false;
}
}

