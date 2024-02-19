import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-categorizacion',
  standalone: true,
  imports: [],
  templateUrl: './categorizacion.component.html',
  styleUrl: './categorizacion.component.css'
})
export class CategorizacionComponent implements OnInit {
  datosCat:any
  constructor(private gastosService:GastosService){}
  ngOnInit(): void {
    this.gastorPorCat()
  }
  gastorPorCat(){
    this.gastosService.gastosCategoria().subscribe({
      next:(datos:any)=>{
        this.datosCat=datos.categorias
      },error:(err)=>{
        console.log('err:'+err)
      }
    })
  }

}
