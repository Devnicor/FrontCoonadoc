import { Component } from '@angular/core';
import { NavbarComponent } from '../components-html/navbar/navbar.component';
import { FooterComponent } from '../components-html/footer/footer.component';

@Component({
  selector: 'app-services',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
