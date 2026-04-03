import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Experience } from '../../core/models/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  experiences: Experience[] = [];

  ngOnInit() {
    this.portfolioService.getExperience().subscribe(data => {
      this.experiences = data;
    });
  }
}
