import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyPortfolioComponent,
    ReferencesComponent,
    ContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {}
