import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    //Utilizando destructuracion para obtener el Id del objeto
    this.router.params.subscribe( ( {id} ) => console.log(id) );
  }

}
