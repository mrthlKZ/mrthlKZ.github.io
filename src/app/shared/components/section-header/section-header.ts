import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header-wrapper text-center mb-5" data-aos="fade-up">
      <h2 class="section-title">
        <span class="text-gradient">{{ title }}</span>
      </h2>
      @if (subtitle) {
        <p class="section-subtitle lead mx-auto mt-3">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    .section-subtitle {
      max-width: 600px;
      color: var(--text-secondary);
    }
  `]
})
export class SectionHeaderComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
}
