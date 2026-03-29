import { EN_TEXTS } from './languages/en';
import { PT_TEXTS } from './languages/pt';
import { AppLanguage, AppTexts } from './language.types';

export const LANGUAGE_DICTIONARY: Record<AppLanguage, AppTexts> = {
  pt: PT_TEXTS,
  en: EN_TEXTS,
};
