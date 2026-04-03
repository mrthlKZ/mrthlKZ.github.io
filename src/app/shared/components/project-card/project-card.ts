import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card glass-card h-100 position-relative overflow-hidden">
      <!-- Glow effect on hover -->
      <div class="card-glow"></div>
      
      <div class="card-body p-4 p-xl-5 d-flex flex-column h-100 position-relative z-1">
        <div class="d-flex justify-content-between align-items-start mb-4">
          <div class="project-icon icon-glow">
            <i class="bi bi-folder2-open"></i>
          </div>
          <div class="d-flex gap-2 flex-wrap justify-content-end">
            @for (tag of project.tags; track tag) {
              <span class="badge border border-secondary text-secondary rounded-pill px-3">{{ tag }}</span>
            }
          </div>
        </div>

        <h3 class="h4 fw-bold mb-3">{{ project.title }}</h3>
        
        <p class="text-secondary mb-4 flex-grow-1">{{ project.summary }}</p>
        
        <div class="project-details mb-4">
          <p class="mb-2"><strong class="text-primary"><i class="bi bi-code-slash me-2"></i>Contribution:</strong> {{ project.contributions }}</p>
          <p class="mb-0"><strong class="text-success"><i class="bi bi-graph-up-arrow me-2"></i>Impact:</strong> {{ project.impact }}</p>
        </div>

        <div class="tech-stack mt-auto pt-4 border-top border-secondary border-opacity-25">
          <ul class="list-inline mb-0">
            @for (tech of project.stack; track tech) {
              <li class="list-inline-item text-secondary font-monospace small"><i class="bi bi-check2 text-primary me-1"></i>{{ tech }}</li>
            }
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      
      .card-glow {
        position: absolute;
        top: -50px;
        right: -50px;
        width: 150px;
        height: 150px;
        background: radial-gradient(circle, rgba(var(--accent-primary-rgb), 0.2) 0%, rgba(0,0,0,0) 70%);
        border-radius: 50%;
        transition: all 0.5s ease;
        opacity: 0;
      }
      
      &:hover {
        transform: translateY(-10px);
        border-color: rgba(var(--accent-primary-rgb), 0.5);
        
        .card-glow {
          opacity: 1;
          transform: scale(2);
        }
        
        .project-icon {
          color: var(--accent-primary);
          transform: translateY(-5px);
        }
      }
    }
    
    .project-icon {
      font-size: 2.5rem;
      color: var(--text-secondary);
      transition: all 0.3s ease;
      line-height: 1;
    }
    
    [data-theme='light'] .border-secondary {
      border-color: rgba(0,0,0,0.1) !important;
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
