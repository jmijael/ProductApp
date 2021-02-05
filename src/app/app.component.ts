import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ProductElement {
  Codigo: number;
  Descripcion: string;
  Precio: number;
}

const ELEMENT_DATA: ProductElement[] = [
    {Codigo:1,Descripcion:"Arroz",Precio:60},
    {Codigo:2,Descripcion:"Maiz",Precio:50},
    {Codigo:3,Descripcion:"Cebolla",Precio:10},
    {Codigo:4,Descripcion:"Tomate",Precio:5},
    {Codigo:5,Descripcion:"Azucar",Precio:80},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SelProd = {
    Codigo:null,Descripcion:null,Precio:null
  }
  Productos= [
    {Codigo:1,Descripcion:"Arroz",Precio:60},
    {Codigo:2,Descripcion:"Maiz",Precio:50},
    {Codigo:3,Descripcion:"Cebolla",Precio:10},
    {Codigo:4,Descripcion:"Tomate",Precio:5},
    {Codigo:5,Descripcion:"Azucar",Precio:80}
  ]

  displayedColumns: string[] = ['Codigo', 'Descripcion', 'Precio', 'Borrar', 'Seleccionar'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<ProductElement>(this.Productos);
  //Productos = ELEMENT_DATA
  
  hayRegistros()
  {
    return this.Productos.length>0;
  }
  borrar(SelProd)
  {
    for (let x=0;x<this.Productos.length;x++)
    {
      if (this.Productos[x].Codigo==SelProd.Codigo)
      {
        this.Productos.splice(x,1);
        this.dataSource = new MatTableDataSource<ProductElement>(this.Productos);
        return;
      }
    }
  }
  seleccionar(SelProd)
  {
    this.SelProd = {Codigo:SelProd.Codigo, Descripcion : SelProd.Descripcion, Precio: SelProd.Precio};
  }
  agregar()
  {
    if (this.Productos.find(value => value.Codigo == this.SelProd.Codigo) != null)
    {
      alert('Ya existe el articulo');
      return;
    }
      this.Productos.push({
        Codigo: this.SelProd.Codigo,
        Descripcion: this.SelProd.Descripcion, 
        Precio: this.SelProd.Precio
      });

  }
  modificar()
  {
    var foundIndex = this.Productos.findIndex(x => x.Codigo == this.SelProd.Codigo);
    this.Productos[foundIndex] = {Codigo:this.SelProd.Codigo, Descripcion : this.SelProd.Descripcion, Precio: this.SelProd.Precio};

  }


  
}
