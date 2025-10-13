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
        imageUrl: 'assets/img/projects/el_pollo_loco.png',
        liveTestUrl: 'https://jonas-hanke.developerakademie.net/El_Pollo_Loco/index.html',
        githubUrl: 'https://github.com/JonasH93Dev/El_Pollo_Loco',
        flexDirection: 'row',
        textAlignment: 'left',
        isWIP: false
      },
      {
        title: this.translate.instant('PROJECTS.Pokedex.TITLE'),
        stack: this.translate.instant('PROJECTS.Pokedex.STACK'),
        description: this.translate.instant('PROJECTS.Pokedex.DESCRIPTION'),
        imageUrl: 'assets/img/projects/Pokedex.png',
        liveTestUrl: 'https://jonas-hanke.developerakademie.net/pokedex/index.html',
        githubUrl: 'https://github.com/JonasH93Dev/Pokedex',
        flexDirection: 'row-reverse',
        textAlignment: 'right',
        isWIP: false
      },
       {
        title: this.translate.instant('PROJECTS.Join.TITLE'),
        stack: this.translate.instant('PROJECTS.Join.STACK'),
        description: this.translate.instant('PROJECTS.Join.DESCRIPTION'),
        imageUrl: 'assets/img/projects/join.png',
        liveTestUrl: '',
        githubUrl: '',
        flexDirection: 'row',
        textAlignment: 'left',
        isWIP: false
      }
      
    ];
  }

  
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}