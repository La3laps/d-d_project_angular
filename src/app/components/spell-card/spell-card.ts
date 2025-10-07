import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spell-card',
  imports: [],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.css'
})
export class SpellCard {
  public currentClass: string;
  public jsonData: any;
  public spell: string = '';
  public spellData: any;
  public showDescription: boolean = false;

  constructor(private router: Router, private http: HttpClient) {
    this.currentClass = this.router.url.replace('/classes/', '');
    this.http.get('https://www.dnd5eapi.co/api/2014/classes/'+ this.currentClass).subscribe({
      next: data => this.jsonData = data,
      error: err => this.jsonData = { error: 'Failed to load data' }
    });
  }

  getSpellData(spellName: string) {
    this.http.get('https://www.dnd5eapi.co/api/2014/spells/'+ spellName).subscribe({
      next: data => this.spellData = data,
      error: err => this.spellData = { error: 'Failed to load data' }
    });
    this.showDescription = true;
  }
}
