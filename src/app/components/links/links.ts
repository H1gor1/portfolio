import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  diGithubOriginal,
  diTwitterOriginal,
} from '@ng-icons/devicon/original';

import {
  bootstrapInstagram,
  bootstrapLinkedin,
  bootstrapFileEarmarkPerson,
} from '@ng-icons/bootstrap-icons';

import { lucideMail } from '@ng-icons/lucide';
import { LanguageService } from '../../services/language.service';

const asCurrentColor = (icon: string): string =>
  icon
    .replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"')
    .replace(/stroke="(?!none)[^"]*"/gi, 'stroke="currentColor"');

const LINKS_ICONS = {
  iconGithub: asCurrentColor(diGithubOriginal),
  iconInstagram: asCurrentColor(bootstrapInstagram),
  iconLinkedin: asCurrentColor(bootstrapLinkedin),
  iconTwitter: asCurrentColor(diTwitterOriginal),
  iconFile: asCurrentColor(bootstrapFileEarmarkPerson),
  iconEmail: asCurrentColor(lucideMail),
} as const;

type LinkIconName = keyof typeof LINKS_ICONS;

interface SocialLinkItem {
  icon: LinkIconName;
  labelKey: 'github' | 'linkedin' | 'lattes' | 'email' | 'instagram';
  href: string;
}

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [NgOptimizedImage, NgIcon, RouterLink],
  providers: [provideIcons(LINKS_ICONS)],
  templateUrl: './links.html',
})
export class Links {
  protected readonly i18n = inject(LanguageService);

  protected readonly socialLinks: SocialLinkItem[] = [
    { icon: 'iconGithub', labelKey: 'github', href: 'https://github.com/H1gor1' },
    { icon: 'iconLinkedin', labelKey: 'linkedin', href: 'https://www.linkedin.com/in/higor-lino/' },
    {
      icon: 'iconFile',
      labelKey: 'lattes',
      href: 'http://lattes.cnpq.br/7043272765692569',
    },
    { icon: 'iconEmail', labelKey: 'email', href: 'mailto:higorgabrieldev@gmail.com' },
    { icon: 'iconInstagram', labelKey: 'instagram', href: 'https://www.instagram.com/higor.lino' },
  ];
}
