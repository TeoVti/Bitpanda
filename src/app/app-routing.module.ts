import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PricesComponent } from './prices/prices.component';

const routes: Routes = [
  { path:  '', redirectTo:  'main', pathMatch:  'full' },
  { path: 'main', component: MainComponent },
  { path: 'prices', component: PricesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 