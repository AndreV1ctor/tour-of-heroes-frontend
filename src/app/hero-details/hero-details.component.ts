import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent {
  @Input() hero?: Hero;
}
