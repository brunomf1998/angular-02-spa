import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() idx: number | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showHero = () => this.router.navigate(['/hero', this.idx]);
}
