import { Component } from '@angular/core';
import { HomePageComponent } from './home/home-page/home-page.component';
import { InfoComponent } from './info/info.component';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,HomePageComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_coonadoc';
}