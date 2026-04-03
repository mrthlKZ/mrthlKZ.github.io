import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer py-5 border-top border-secondary border-opacity-25 mt-5">
      <div class="container text-center">
        <a class="navbar-brand text-gradient fw-bold fs-3 mb-4 d-inline-block" href="#">MKS.</a>
        
        <p class="text-secondary mb-2">&copy; {{ currentYear }} {{ name }}. All rights reserved.</p>
        <p class="text-secondary small mb-0 d-flex align-items-center justify-content-center">
          Built with <i class="bi bi-heart-fill text-danger mx-1"></i> using Angular 17.
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--bg-secondary);
    }
    .navbar-brand {
      font-family: var(--font-heading);
      letter-spacing: -1px;
    }
  `]
})
export class FooterComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  currentYear = new Date().getFullYear();
  name = 'MRUTHUL KS';

  ngOnInit() {
    this.portfolioService.getProfile().subscribe(data => {
      if (data) {
        this.name = data.name;
      }
    });
  }
}
