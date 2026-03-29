import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLanguage } from './i18n/language.types';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly i18n = inject(LanguageService);
  protected readonly isDark = signal(false);
  protected readonly currentThemeLabel = computed(() =>
    this.isDark() ? this.i18n.texts().app.themeDark : this.i18n.texts().app.themeLight,
  );

  constructor() {
    this.syncThemeFromDocument();
  }

  protected toggleTheme(): void {
    const nextMode = !this.isDark();
    this.isDark.set(nextMode);
    document.documentElement.classList.toggle('dark', nextMode);
  }

  protected changeLanguage(event: Event): void {
    const language = (event.target as HTMLSelectElement).value as AppLanguage;
    this.i18n.setLanguage(language);
  }

  private syncThemeFromDocument(): void {
    const hasDarkClass = document.documentElement.classList.contains('dark');
    this.isDark.set(hasDarkClass);
  }
}
