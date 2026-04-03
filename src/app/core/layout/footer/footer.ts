import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
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
