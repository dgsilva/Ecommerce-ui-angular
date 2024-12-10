import { ProdutosService } from 'src/app/services/produtos.service';
import { Component } from '@angular/core';
import { Produto } from 'src/model/produto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
 
  produto:Produto
  produtos:Produto[]=[]
  mensagem: string = '';

  constructor(private service:ProdutosService){
    this.produto = new Produto()
  }

  FormAtendimento = new FormGroup({
    nome: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    
      Preco: new FormControl('',
      [Validators.required]),

      Assunto: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),

      Observacoes: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
  })

  get form(): any {
    return this.FormAtendimento.controls;
  }


  onCategoriaChange(event:any){
    this.produto.categoria.id = event.target.value;
  }

  salvar(){
    this.service.create(this.produto).subscribe({
      next: (data:any) =>{
        this.produto = data;
      },

      error:(e:any) =>{
        console.log(e)
      }
    })
  }

}
