import { Component } from '@angular/core';
import { Carro } from '../../../models/carro';

@Component({
  selector: 'app-carros-list',
  standalone: true,
  imports: [],
  templateUrl: './carros-list.component.html',
  styleUrl: './carros-list.component.scss',
})
export class CarrosListComponent {

  lista: Carro[] = [];

  constructor() {
    this.findAll();
  }


  findAll(){
    //DEPOIS EU VOU TER A COMUNICAÇÃO COM O SERVICE 

    let carro1 = new Carro();
    carro1.id = 1;
    carro1.nome = 'HRV';

    let carro2 = new Carro();
    carro2.id = 2;
    carro2.nome = 'HRV';

    let carro3 = new Carro();
    carro3.id = 3;
    carro3.nome = 'HRV';

    this.lista.push(carro1, carro2, carro3);
  
  }

  delete(carro: Carro){
    let indice = this.lista.findIndex(x => {return x.id == carro.id});
    if(confirm('Deseja deletar isso aí?')){
      this.lista.splice(indice, 1); //deletando um objeto na posição INDICE
    }
  }


}
