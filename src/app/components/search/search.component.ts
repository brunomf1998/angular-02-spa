import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  term: string | undefined;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.term = params.name;
      this.heroes = this.heroesService.searchForHeroes(params.name);
    });
  }
}
