import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { InfoComponent } from './info/info.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'QuienesSomos', component: InfoComponent},
    { path: 'Servicios', component: ServicesComponent},
    { path: '**', redirectTo: '' }
  ];
