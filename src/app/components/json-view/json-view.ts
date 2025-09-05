import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'json-view',
  imports: [JsonPipe, RouterLink],
  templateUrl: './json-view.html',
  styleUrl: './json-view.css'
})
export class JsonView {
  jsonData: any;

  constructor(private http: HttpClient) {
    this.http.get('https://www.dnd5eapi.co/api/2014/classes').subscribe({
      next: data => this.jsonData = data,
      error: err => this.jsonData = { error: 'Failed to load data'}
    })
    };
  }
