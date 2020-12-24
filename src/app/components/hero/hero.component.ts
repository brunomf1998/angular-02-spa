import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero: any = {};
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private location: Location) {
    this.activatedRoute.params.subscribe(params => {
      this.hero = this.heroesService.getHero(params.id);
    });
  }

  goBack = () => this.location.back();

}
