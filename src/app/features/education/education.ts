import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Education } from '../../core/models/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  education: Education[] = [];

  ngOnInit() {
    this.portfolioService.getEducation().subscribe(data => {
      this.education = data;
    });
  }
}
