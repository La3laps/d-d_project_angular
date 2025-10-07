import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassCard } from '../class-card/class-card';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'class-detail',
  standalone: true,
  imports: [ClassCard, RouterLink],
  templateUrl: './class-detail.html',
  styleUrl: './class-detail.css'
})
export class ClassDetail {
  className: string = '';
  url: string = '';
  jsonData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.className = params['className'];
      this.url = '/classes/' + this.className + '/spells';
    });
    
    this.http.get('https://www.dnd5eapi.co/api/2014'+ this.url).subscribe({
      next: data => this.jsonData = data,
      error: err => this.jsonData = { error: 'Failed to load data' }
    });

  }
}
