import { Component, OnInit } from '@angular/core';

/**
 * @type Theme
 * Temas padrões que foram escolhidos para o Sistema
 *
 * Tema drak = `dracula`
 * Tema light = `silk` *
 */
type Theme = 'dracula' | 'silk';

/**
 * Componente responsável pelo controle do tema da aplicação,
 * alternando entre os temas do `Theme`
 */
@Component({
  selector: 'app-theme-controller',
  templateUrl: './themeController.component.html',
  styleUrl: './themeController.component.css',
})
export class ThemeControllerComponent implements OnInit {
  /** Indica se o modo escuro está ativado */
  isDarkMode = false;

  /** Constante para o tema escuro */
  readonly DARK_THEME: Theme = 'dracula';

  /** Constante para o tema claro */
  readonly LIGHT_THEME: Theme = 'silk';

  /** Chave usada para armazenar o tema no localStorage */
  private readonly THEME_KEY = 'theme';

  /**
   * Alterna o tema da aplicação quando o checkbox é alterado.
   * Atualiza o estado interno, salva o tema no localStorage e aplica o tema no DOM.
   *
   * @param event Evento do input checkbox que indica se o modo escuro está ativo.
   */
  toggleDarkMode(event: Event): void {
    this.isDarkMode = (event.target as HTMLInputElement).checked;
    const theme = this.isDarkMode ? this.DARK_THEME : this.LIGHT_THEME;
    this.setThemeLocalStorage(theme);
    this.applyTheme(theme);
  }

  /**
   * Salva o tema selecionado no localStorage para persistência entre sessões.
   *
   * @param theme Tema a ser salvo.
   */
  private setThemeLocalStorage(theme: Theme): void {
    localStorage.setItem(this.THEME_KEY, theme);
  }

  /**
   * Recupera o tema salvo no localStorage.
   * Se não existir valor válido, retorna o tema escuro por padrão.
   *
   * @returns Tema armazenado ou o tema escuro por padrão.
   */
  private getThemeLocalStorage(): Theme {
    const theme = localStorage.getItem(this.THEME_KEY) as Theme | null;
    return theme === this.DARK_THEME || theme === this.LIGHT_THEME
      ? theme
      : this.DARK_THEME;
  }

  /**
   * Aplica o tema no documento, definindo o atributo 'data-theme' no elemento html.
   *
   * @param theme Tema a ser aplicado.
   */
  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  /**
   * Inicializa o componente, recuperando o tema salvo e aplicando-o,
   * além de atualizar o estado do checkbox.
   */
  ngOnInit(): void {
    const currentTheme = this.getThemeLocalStorage();
    this.isDarkMode = currentTheme === this.DARK_THEME;
    this.applyTheme(currentTheme);
  }
}
