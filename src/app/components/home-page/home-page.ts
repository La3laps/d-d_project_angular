import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})

export class HomePage {
  jsonData: any;
  currentPath: string = '';


  constructor(private http: HttpClient) {
    this.http.get('https://www.dnd5eapi.co/api/2014/classes').subscribe({
      next: data => this.jsonData = data,
      error: err => this.jsonData = { error: 'Failed to load data' }
    })
  };


  formatPath(unformattedPath: string): string {
    const toBeReplaced = '/api/2014';
    this.currentPath = unformattedPath.replace(toBeReplaced, '');
    return this.currentPath;
  }

  printPath(): void {
    console.log(this.currentPath);
  }
}
