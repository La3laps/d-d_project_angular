import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassCard } from '../class-card/class-card';

@Component({
  selector: 'class-detail',
  imports: [ClassCard],
  templateUrl: './class-detail.html',
  styleUrl: './class-detail.css'
})
export class ClassDetail {
  className: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.className = params['className'];
    });
  }
}
