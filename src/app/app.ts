import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly isDark = signal(false);
  protected readonly currentThemeLabel = computed(() =>
    this.isDark() ? 'Modo escuro' : 'Modo claro',
  );

  constructor() {
    this.syncThemeFromDocument();
  }

  protected toggleTheme(): void {
    const nextMode = !this.isDark();
    this.isDark.set(nextMode);
    document.documentElement.classList.toggle('dark', nextMode);
  }

  private syncThemeFromDocument(): void {
    const hasDarkClass = document.documentElement.classList.contains('dark');
    this.isDark.set(hasDarkClass);
  }
}
