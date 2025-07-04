import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeControllerComponent } from '../themeController/themeController.component';

/**
 * Componente responsável pela `Header` da aplicação
 */
@Component({
  selector: 'app-header',
  imports: [FormsModule, ThemeControllerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
