import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  private _heroeSearch:any = {}

  constructor(
    private _heroesServices:HeroesService,
    private router:Router  
  ) { }

  ngOnInit() {
  }
  
  buscarHeroe(termino:string){
    this._heroeSearch = this._heroesServices.buscarHeroes(termino)
    this.router.navigate(['/search', termino])
  }
}
