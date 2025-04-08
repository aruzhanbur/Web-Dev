import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { Company } from './models/company';
import { Vacancy } from './models/vacancy';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HttpClientModule] // ✅ this fixes the warnings!
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompany: Company | null = null;

  constructor(private apiService: ApiService) {}

  showVacancies(company: Company): void {
    this.selectedCompany = company;
    this.apiService.getCompanyVacancies(company.id).subscribe({
      next: (data) => this.vacancies = data,
      error: (err) => console.error('Error loading vacancies:', err)
    });
  }

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe({
      next: (data) => {
        console.log('✅ Companies received:', data); // Should show array of companies
        this.companies = data;
      },
      error: (err) => {
        console.error('❌ API error:', err); // Will show error if failed
      }
    });
  }
  
}

