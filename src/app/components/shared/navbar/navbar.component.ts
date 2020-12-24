import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @ViewChild('search')
  searchInput!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  searchForHero = (term: string) => {
    this.searchInput.nativeElement.value = '';
    if (term === '') {
      alert('Ingrese un héroe');
    } else {
      this.router.navigate(['/search', term]);
    }
  }

}
