import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ZakazaniComponent } from './zakazani/zakazani.component';
const routes: Routes = [
  {path:'', component:PocetnaComponent},
  {path:'search/:searchTerm', component:PocetnaComponent},
  {path:'tag/:tag', component:PocetnaComponent},
  {path:'zakazani', component:ZakazaniComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
