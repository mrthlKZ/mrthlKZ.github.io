import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Profile } from '../../core/models/profile';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  profile?: Profile;
  currentTag = '';
  private tagIndex = 0;
  
  ngOnInit() {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
      if (this.profile?.heroTags?.length) {
        this.startTypingEffect();
      }
    });
  }

  startTypingEffect() {
    if (!this.profile?.heroTags) return;
    
    let i = 0;
    setInterval(() => {
      this.currentTag = this.profile!.heroTags[this.tagIndex];
      this.tagIndex = (this.tagIndex + 1) % this.profile!.heroTags.length;
    }, 2500);
    this.currentTag = this.profile!.heroTags[0];
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadResume() {
    // Usually points to a PDF in assets folder
    alert('Resume download will be available soon.');
  }
}
