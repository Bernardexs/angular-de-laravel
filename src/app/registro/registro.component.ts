import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  datosC:any
  todos:any
  busqueda:any
  error:any

  ngOnInit(): void {
    this.conseguircategorias()
this.gastorPorCat()  }
  constructor(private gastosService:GastosService){}
  conseguircategorias(){
    this.gastosService.categorias().subscribe({
      next:(datos:any)=>{
        this.datosC=datos.categorias
      },error:(err)=>{
        console.log('error:'+err)
      }
    })
  }
  guardarD(descripcion:any,monto:any,fechaTrans:any,categorias_id:any){
    
    this.gastosService.guardargastos(descripcion.value,monto.value,fechaTrans.value,categorias_id.value).subscribe({
      next:(datos:any)=>{
        this.error=datos.error
        console.log(datos.error)
      },error:(err)=>{
        console.log('error'+err)
      }
    })
  }
  buscalo(buscar:any){
    this.gastosService.buscar(buscar.value).subscribe({
      next:(datos:any)=>{
        this.busqueda=datos.busqueda
      },error:(err)=>{
        console.log('error'+err)

      }

    })
  }
  gastorPorCat(){
    this.gastosService.gastosCategoria().subscribe({
      next:(datos:any)=>{
        this.busqueda=datos.categorias
      },error:(err)=>{
        console.log('err:'+err)
      }
    })
  }

}
