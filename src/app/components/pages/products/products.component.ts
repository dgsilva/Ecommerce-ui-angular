import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/model/produto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  produtos:Produto[] = [];
  
constructor(private servico:ProdutosService) { 
  this.findAll();
}  

  ngOnInit(): void {
  }

  findAll(){
    this.servico.getProdutos().subscribe({
      next: data => {
        this.produtos = data;
      },
      error:(e)=>{
        console.log(e)
      }
    })
  }
}
