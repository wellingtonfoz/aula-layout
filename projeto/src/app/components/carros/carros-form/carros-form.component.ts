import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../../models/carro';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carros-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carros-form.component.html',
  styleUrl: './carros-form.component.scss'
})
export class CarrosFormComponent {

  carro: Carro = new Carro();

  rotaAtivida = inject(ActivatedRoute);

  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      //AQUI VC VAI CHAMAR O FINDBYID()
      let carro1 = new Carro();
      carro1.id = 1;
      carro1.nome = 'HRV';
      carro1.marca = 'HONDA';
      this.carro = carro1; //setar o objeto no carro do formuljario
    }
  }

  save(){
    if(this.carro.id > 0){
      // UPDATE
      alert('estou fazendo um update....');
    }else{
      // SAVE
      alert('estou fazendo um save');
    }
  }

}
