import { Component, OnInit } from '@angular/core';
import { SubcategoriaService } from "../../services/subcategoria.service";
import { SubcategoriaInterface } from "../../models/subcategoriaInterface";
import {Router} from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  subcategoria = {
    cod_sub_categoria: '',
    cod_categoria: '',
    nombre: '',
    descripcion: '',
    fecha_creacion: ''
  }
  constructor(private subcategoriaService: SubcategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.subcategoriaService.listSubcategoria().subscribe((res: SubcategoriaInterface[])=>{
      this.subcategorias = res;
    })
  }

  nombre: string = "";
  descripcion: string = "";
  cod_categoria: string = "";
  cod_sub_categoria: string = "";
  fecha_creacion: Date;
  subcategorias: SubcategoriaInterface[] = [];

  addSubcategoria(){
    this.subcategoriaService.addSubcategoria(this.subcategoria)
    .subscribe(
      res => {
        console.log(res);
        //this.router.navigate(['/crud']);
        this.subcategoriaService.listSubcategoria().subscribe((res: SubcategoriaInterface[])=>{
          this.subcategorias = res;
        })
      },
      err => console.log(err)
    )
  }

  deleteSubcategoria(cod_sub_categoria){
    this.subcategoriaService.deleteSubcategoria(cod_sub_categoria)
    .subscribe(
      res => {
        console.log(res);
        //this.router.navigate(['/crud']);
        this.subcategoriaService.listSubcategoria().subscribe((res: SubcategoriaInterface[])=>{
          this.subcategorias = res;
        })
      },
      err => console.log(err)
    );
  }
}
