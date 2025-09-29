
import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', loadComponent: () => import('./imprint/imprint.component').then(m => m.ImprintComponent) },


  { path: 'privacy-policy',
    loadComponent: () => import('./privacy-policy/privacy-policy.component')
      .then(m => m.PrivacyPolicyComponent) },

  { path: 'about', loadComponent: () => import('./main-content/about-me/about-me.component').then(m => m.AboutMeComponent) },
  { path: 'skills', loadComponent: () => import('./main-content/my-skills/my-skills.component').then(m => m.MySkillsComponent) },
  { path: 'portfolio', loadComponent: () => import('./main-content/my-portfolio/my-portfolio.component').then(m => m.MyPortfolioComponent) },
  { path: 'contact', loadComponent: () => import('./main-content/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];
