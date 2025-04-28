import { Component } from '@angular/core';
import { NavbarComponent } from '../components-html/navbar/navbar.component';
import { FooterComponent } from '../components-html/footer/footer.component';


@Component({
  selector: 'app-info',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
