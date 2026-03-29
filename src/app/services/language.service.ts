import { Injectable, computed, signal } from '@angular/core';
import { LANGUAGE_DICTIONARY } from '../i18n/language-dictionary';
import { AppLanguage } from '../i18n/language.types';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'portfolio.language';

  protected readonly language = signal<AppLanguage>(this.getInitialLanguage());
  readonly texts = computed(() => LANGUAGE_DICTIONARY[this.language()]);

  readonly currentLanguage = computed(() => this.language());

  setLanguage(value: AppLanguage): void {
    this.language.set(value);
    this.persist(value);
  }

  private getInitialLanguage(): AppLanguage {
    try {
      const stored = globalThis.localStorage?.getItem(this.storageKey);
      if (stored === 'pt' || stored === 'en') {
        return stored;
      }
    } catch {
      // Ignore storage access errors and fallback to default language.
    }

    return 'pt';
  }

  private persist(value: AppLanguage): void {
    try {
      globalThis.localStorage?.setItem(this.storageKey, value);
    } catch {
      // Ignore storage access errors.
    }
  }
}
