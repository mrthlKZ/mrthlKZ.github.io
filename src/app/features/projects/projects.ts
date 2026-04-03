import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  projects: Project[] = [];

  ngOnInit() {
    this.portfolioService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
