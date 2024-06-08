import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/component/header/header/header.component';
import { FooterComponent } from './core/component/footer/footer/footer.component';
import { MainContentComponent } from './core/component/main-content/main-content/main-content.component';
import { NavbarComponent } from './core/component/navbar/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent, FooterComponent, MainContentComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecowave-landing-page';
}
