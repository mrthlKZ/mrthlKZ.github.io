import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Achievement } from '../../core/models/achievement';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.scss']
})
export class AchievementsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  achievements: Achievement[] = [];

  ngOnInit() {
    this.portfolioService.getAchievements().subscribe(data => {
      this.achievements = data;
    });
  }
}
