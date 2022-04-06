import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsumerAComponent} from "./consumer-a/consumer-a.component";
import {HomeComponent} from "./home/home.component";
import {ConsumerBComponent} from "./consumer-b/consumer-b.component";

const routes: Routes = [

  {
    path: 'consumer-a',
    component: ConsumerAComponent,
  },
  {
    path: 'consumer-b',
    component: ConsumerBComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
