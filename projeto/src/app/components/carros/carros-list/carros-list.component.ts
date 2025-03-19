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
    let carro1 = new Carro();
    carro1.id = 1;
    carro1.nome = 'HRV';

    this.lista.push(carro1);
    this.lista.push(carro1);
    this.lista.push(carro1);
    this.lista.push(carro1);
    this.lista.push(carro1);
    this.lista.push(carro1);
    this.lista.push(carro1);
    this.lista.push(carro1);
  }


}
