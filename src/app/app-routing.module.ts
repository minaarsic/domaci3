import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
const routes: Routes = [
  {path:'', component:PocetnaComponent},
  {path:'search/:searchTerm', component:PocetnaComponent},
  {path:'tag/:tag', component:PocetnaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
