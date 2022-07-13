import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`
            <h1>{{title}}</h1>
        <h3>la base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(1)">+1</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-1)">-1</button>
    
    `
})

export class contadorComponent {

    title: string = 'contador app';
    numero: number = 10;
    base: number = 10;
  
    acumular (valor:number){
      this.numero += valor*this.base;
    }
  

}