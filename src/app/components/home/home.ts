import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  diAngularPlain,
  diCplusplusPlain,
  diDockerPlain,
  diJavaPlain,
  diLinuxPlain,
} from '@ng-icons/devicon/plain';
import { diLaravelLine } from '@ng-icons/devicon/line';
import { diNginxOriginal, diSpringOriginal } from '@ng-icons/devicon/original';
import { LanguageService } from '../../services/language.service';

const asCurrentColor = (icon: string): string =>
  icon
    .replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"')
    .replace(/stroke="(?!none)[^"]*"/gi, 'stroke="currentColor"');

const HOME_TECH_ICONS = {
  diAngularPlain,
  diLaravelLine,
  diJavaPlain,
  diSpringMonochrome: asCurrentColor(diSpringOriginal),
  diCplusplusPlain,
  diDockerPlain,
  diNginxMonochrome: asCurrentColor(diNginxOriginal),
  diLinuxPlain,
} as const;

type HomeTechIconName = keyof typeof HOME_TECH_ICONS;

interface HomeTechItem {
  icon: HomeTechIconName;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgIcon],
  providers: [provideIcons(HOME_TECH_ICONS)],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly i18n = inject(LanguageService);
  protected readonly carouselDurationSeconds = 24;

  // Edite essa lista para adicionar/remover ícones no carrossel.
  protected readonly techStack: HomeTechItem[] = [
    { icon: 'diAngularPlain', label: 'Angular' },
    { icon: 'diLaravelLine', label: 'Laravel' },
    { icon: 'diJavaPlain', label: 'Java' },
    { icon: 'diSpringMonochrome', label: 'Spring' },
    { icon: 'diCplusplusPlain', label: 'C++' },
    { icon: 'diDockerPlain', label: 'Docker' },
    { icon: 'diNginxMonochrome', label: 'Nginx' },
    { icon: 'diLinuxPlain', label: 'Linux' },
  ];

}
