import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'json-view',
  imports: [JsonPipe],
  templateUrl: './json-view.html',
  styleUrl: './json-view.css'
})
export class JsonView {
  jsonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://www.dnd5eapi.co/api/2014/').subscribe({
      next: data => this.jsonData = data,
      error: err => this.jsonData = { error: 'Failed to load data'}
    })
    };
  }
