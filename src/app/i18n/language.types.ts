export type AppLanguage = 'pt' | 'en';

export interface AppTexts {
  app: {
    title: string;
    themeDark: string;
    themeLight: string;
    madeWith: string;
    author: string;
    languageLabel: string;
    languageOptionPt: string;
    languageOptionEn: string;
  };
  home: {
    sectionLabel: string;
    about: string;
    projectsCta: string;
    contactCta: string;
    photoAlt: string;
    stackLabel: string;
    stackTitle: string;
    stackCarouselAria: string;
  };
  links: {
    backButton: string;
    sectionLabel: string;
    heroTitle: string;
    heroDescription: string;
    photoAlt: string;
    openPrefix: string;
    labels: {
      github: string;
      linkedin: string;
      lattes: string;
      email: string;
      instagram: string;
    };
  };
}
