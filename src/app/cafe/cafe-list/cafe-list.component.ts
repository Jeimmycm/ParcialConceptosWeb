import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  contadorOrigen: number =0;
  contadorBlend: number =0;


  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;

    });
  }

  calculateCafe(cafe: Cafe):void {
      if(cafe.tipo=="Café de Origen"){

        this.contadorOrigen=1+this.contadorOrigen;
      }
      else if(cafe.tipo=="Blend"){
        this.contadorBlend=1+this.contadorBlend;
      }
  }


  ngOnInit(): void {
    this.getCafes();
  }

}
