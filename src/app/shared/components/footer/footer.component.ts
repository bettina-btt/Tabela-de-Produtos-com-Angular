import { Component } from '@angular/core';

/**
 * Componente responsável pelo `Footer` da aplicaçao
 */
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  /** Retorna o ano atual que é mostrado no `Footer` */
  protected currentYear: number = new Date().getFullYear();
}
