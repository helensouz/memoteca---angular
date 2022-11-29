import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/componentes/pensamentos/pensamento/pensamento';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private pensamentoService: PensamentoService,
    private router: Router
    ) { }

    formGroup = new FormGroup({
      pensamentoinput: new FormControl(''),
      
})



  


  //métodos
    cancelarPensamento() : void{

       alert('Operacao cancelada. Voce esta sendo redirecionado para listar pensamentos')
    }

 

      criarPensamento() {
        this.pensamentoService.criar(this.pensamento).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
        })
      }
     

    



  ngOnInit(): void {
  }

}
