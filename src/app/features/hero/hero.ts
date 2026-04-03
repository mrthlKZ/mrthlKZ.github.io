import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Profile } from '../../core/models/profile';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private cdr = inject(ChangeDetectorRef);
  profile?: Profile;
  currentTag = '';
  private tagIndex = 0;

  ngOnInit() {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
      console.log(this.profile);
      if (this.profile?.heroTags?.length) {
        this.startTypingEffect();
      }
      this.cdr.detectChanges();
      setTimeout(() => AOS.refresh(), 50);
    });
  }

  private typingTimeout: any;
  private isDeleting = false;
  private charIndex = 0;

  startTypingEffect() {
    if (!this.profile?.heroTags || this.profile.heroTags.length === 0) return;

    this.currentTag = '';
    this.tagIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;

    this.typeNextCharacter();
  }

  private typeNextCharacter() {
    if (!this.profile?.heroTags) return;
    const currentFullTag = this.profile.heroTags[this.tagIndex];

    if (this.isDeleting) {
      this.currentTag = currentFullTag.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentTag = currentFullTag.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.currentTag === currentFullTag) {
      typeSpeed = 2000; // Pause at the end of the word
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentTag === '') {
      this.isDeleting = false;
      this.tagIndex = (this.tagIndex + 1) % this.profile.heroTags.length;
      typeSpeed = 500; // Pause before typing the next word
    }

    this.cdr.detectChanges();

    clearTimeout(this.typingTimeout);
    this.typingTimeout = setTimeout(() => this.typeNextCharacter(), typeSpeed);
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
