import { hostViewClassName } from '@angular/compiler';
import { Component,  } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string =''
  hayError: boolean= false;
  paises: Country[] =[]
  constructor(private paisService: PaisService ){}

  buscar(termino : string){
    this.termino=termino;
    this.hayError = false;
    console.log(this.termino)
    this.paisService.buscarPais(termino)
      .subscribe((paises) =>{
        console.log(paises)
        this.paises = paises;

      }, (err)=>{
        console.log(err)
        this.hayError= true;
      this.paises
      });
  }



}


