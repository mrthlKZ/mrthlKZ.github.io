import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SkillCategory } from '../../core/models/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  skillCategories: SkillCategory[] = [];

  ngOnInit() {
    this.portfolioService.getSkills().subscribe(data => {
      this.skillCategories = data;
    });
  }
}
