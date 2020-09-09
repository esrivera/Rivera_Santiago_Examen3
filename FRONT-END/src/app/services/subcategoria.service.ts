import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor(private http: HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json"
  })

  listSubcategoria() {
    const url = "http://localhost:3000/subcategoria";
    return this.http.get(url);
  }

  listCategoria(){
    const url = "http://localhost:3000/categoria";
    return this.http.get(url);
  }

  addSubcategoria(subcategoria) {
    const url = "http://localhost:3000/subcategoria/add";
    return this.http.post<any>(url, subcategoria);
  }

  deleteSubcategoria(cod_sub_categoria) {
    const url = "http://localhost:3000/subcategoria/delete/" + cod_sub_categoria;
    return this.http.delete(url);
  }

  listSubcategoriaByCat(cod_categoria){
    const url = "http://localhost:3000/subcategoria/" + cod_categoria;
    return this.http.delete(url);
  }
}
