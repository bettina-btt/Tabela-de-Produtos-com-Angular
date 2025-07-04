import { Component, OnInit } from '@angular/core';

type Theme = 'dracula' | 'silk';

@Component({
  selector: 'app-theme-controller',
  templateUrl: './themeController.component.html',
  styleUrls: ['./themeController.component.css'],
})
export class ThemeControllerComponent implements OnInit {
  isDarkMode = false;
  readonly DARK_THEME: Theme = 'dracula';
  readonly LIGHT_THEME: Theme = 'silk';
  private readonly THEME_KEY = 'theme';

  toggleDarkMode(event: Event): void {
    this.isDarkMode = (event.target as HTMLInputElement).checked;
    const theme = this.isDarkMode ? this.DARK_THEME : this.LIGHT_THEME;
    this.setThemeLocalStorage(theme);
    this.applyTheme(theme);
  }

  private setThemeLocalStorage(theme: Theme): void {
    localStorage.setItem(this.THEME_KEY, theme);
  }

  private getThemeLocalStorage(): Theme {
    const theme = localStorage.getItem(this.THEME_KEY) as Theme | null;
    return theme === this.DARK_THEME || theme === this.LIGHT_THEME
      ? theme
      : this.DARK_THEME;
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  ngOnInit(): void {
    const currentTheme = this.getThemeLocalStorage();
    this.isDarkMode = currentTheme === this.DARK_THEME;
    this.applyTheme(currentTheme);
  }
}
