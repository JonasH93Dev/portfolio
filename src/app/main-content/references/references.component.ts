import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  readonly total = 3;         
  current = 0;               

  prev(): void {
    this.current = (this.current - 1 + this.total) % this.total;
  }

  next(): void {
    this.current = (this.current + 1) % this.total;
  }

  set(index: number): void {
    if (index >= 0 && index < this.total) this.current = index;
  }

  imgSrc(): string {
  // liegt in: public/assets/img/references/1.png, 2.png, 3.png
  return `/assets/img/references/${this.current + 1}.png`; // <-- führender Slash
}

}
