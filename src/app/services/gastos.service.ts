import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private httpClient:HttpClient) { }
  categorias(){
    return this.httpClient.get('http://127.0.0.1:8000/api/categorias')
  }
  guardargastos(descripcion:any,monto:any,fechaTrans:any,categorias_id:any){
    
    return this.httpClient.post('http://127.0.0.1:8000/api/store',{
      descripcion:descripcion,
      monto:monto,
      fechaTransaccion:fechaTrans,
      categorias_id:categorias_id
    }
      
    )
  }
  gastosCategoria(){
    return this.httpClient.get('http://127.0.0.1:8000/api/gastosCategoria')
  }
  buscar(buscar: any) {
    // Construye los parámetros de la URL
    let params = new HttpParams().set('buscar', buscar);
    
    // Realiza la solicitud GET con los parámetros
    return this.httpClient.get('http://127.0.0.1:8000/api/buscar', { params });
  }
}
