import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './forma-pagamento-update.component.html',
  styleUrls: ['./forma-pagamento-update.component.css']
})
export class FormaPagamentoUpdateComponent implements OnInit {

  formaPagamento!: FormaPagamento;

  constructor(private formaPagamentoService: FormaPagamentoService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const proId = this.route.snapshot.paramMap.get('proId')
    this.formaPagamentoService.readById(proId!).subscribe((formaPagamento: FormaPagamento) =>{
      this.formaPagamento = formaPagamento
    })
  }

  updateFormaPagamento(): void {
    this.formaPagamentoService.update(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de Pagamento atualizado com sucesso!')
      this.router.navigate(['/fpagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fpagamento'])
  }

}

