import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Nombre: string = "Isabel Alejandra Perez Jimenez";
  public arreglo: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public pi : number = Math.PI;
  public porcentaje: number = 0.245;
  public salario = 1234.5;
  public fecha = new Date();
  public persona={
    nombre:'IA',
    edad:25,
    direccion:{
      calle:'Cerro de los gallos',
      casa:'213'
    }
  }
  public nombre2:string='IsAbEl AlEjAnDra PeRez JiMenEz'
}
