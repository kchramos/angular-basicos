import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroes: string[] = ['Catwoman','Wonder Woman','Scarlet Witch'];
  heroeBorrado: string ='';

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
    
  }


}
