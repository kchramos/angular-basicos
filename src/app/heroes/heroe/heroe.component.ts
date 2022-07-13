import { Component } from "@angular/core";


@Component({

   selector: 'app-heroe',
   templateUrl: 'heroe.component.html' 
})

export class heroeComponent{

    nombre:string='Catwoman';
    edad:number= 31

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre}-${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Wonder Woman';
    }

    cambiarEdad():void{
        this.edad=32
    }
}