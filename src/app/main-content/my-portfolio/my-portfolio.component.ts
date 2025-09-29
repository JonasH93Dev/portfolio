import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';

import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-my-portfolio',
    standalone: true,
    imports: [ProjectComponent, TranslateModule],
    templateUrl: './my-portfolio.component.html',
    styleUrls: ['./my-portfolio.component.scss']
})
export class MyPortfolioComponent implements OnInit {

  projects: any[] = [];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.loadProjects();
  }


  loadProjects(): void {
    this.projects = [
      {
        title: this.translate.instant('PROJECTS.EL_POLLO_LOCO.TITLE'),
        stack: this.translate.instant('PROJECTS.EL_POLLO_LOCO.STACK'),
        description: this.translate.instant('PROJECTS.EL_POLLO_LOCO.DESCRIPTION'),
        imageUrl: '/assets/img/projects/el_pollo_loco.png',
        liveTestUrl: 'https://jonas-hanke.developerakademie.net/El_Pollo_Loco/index.html',
        githubUrl: 'https://github.com/JonasH93Dev/El_Pollo_Loco',
        flexDirection: 'row',
        textAlignment: 'left',
        isWIP: false
      },
      
    ];
  }

  
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}