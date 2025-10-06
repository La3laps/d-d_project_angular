import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassCard } from '../class-card/class-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'class-detail',
  imports: [ClassCard, RouterLink],
  templateUrl: './class-detail.html',
  styleUrl: './class-detail.css'
})
export class ClassDetail {
  className: string = '';
  url: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.className = params['className'];
      this.url = '/classes/' + this.className + '/spells';
    });
  }
}
