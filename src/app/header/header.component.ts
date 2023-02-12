import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'salon';

  isMenuOpened: boolean=false;
  toggleMenu(): void
{
  this.isMenuOpened=!this.isMenuOpened;
}
ClickedOutside():void{
  this.isMenuOpened=false;
}
}
