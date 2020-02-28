import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private heroes:any[] = []
  private nombre:string
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private router:Router
  ) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(params =>{
      this.nombre = params['nombre']
      this.heroes = this._heroeService.buscarHeroes(params['nombre']) 
    })
  }

  verHeroe( idx:number ) {
    this.router.navigate(['heroe', idx])
  }


}
