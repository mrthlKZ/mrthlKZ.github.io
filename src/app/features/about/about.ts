import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Profile } from '../../core/models/profile';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  profile?: Profile;

  ngOnInit() {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
}
