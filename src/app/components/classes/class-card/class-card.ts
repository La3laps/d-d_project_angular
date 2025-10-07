import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'class-card',
  imports: [],
  templateUrl: './class-card.html',
  styleUrl: './class-card.css'
})
export class ClassCard {
  currentUrl: string;
  jsonData: any;

  constructor(private router: Router, private http: HttpClient) {
    this.currentUrl = this.router.url.replace('/classes/', '');
    this.http.get('https://www.dnd5eapi.co/api/2014/classes/'+ this.currentUrl).subscribe({
      next: data => this.jsonData = data,
      error: err => this.jsonData = { error: 'Failed to load data' }
    });

  }
}
