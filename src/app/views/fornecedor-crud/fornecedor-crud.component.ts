import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class FornecedorCrudComponent implements OnInit {

    //construtor para configurar botao para tela de produto
    constructor(private router: Router) { }

    ngOnInit(): void {
    }
  
    //criando interação com botoes
    navigateToFornecedorCreate(): void{
      this.router.navigate(['/fornecedores/create'])
    }
  
}
