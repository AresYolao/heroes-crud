import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {


  heroe: HeroeModel = new HeroeModel();
  
  constructor() { }

  ngOnInit() {
  }

  guardar(form: Ngform){

    if(form.invalid){
      console.log('Formulario no valido');
      return;
    }
    console.log(form);
    console.log(this.heroe);
  }
}
