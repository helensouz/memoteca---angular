import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from 'src/app/services/pensamento.service';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {


            cancelar() {

              this.router.navigate(['/listarPensamento'])
            }


          excluirPensamento() {
            if(this.pensamento.id){ //se existir
              this.service.excluir(this.pensamento.id).subscribe(() => {
                this.router.navigate(['../pensamento']);
              })
            }
            this.router.navigate(['/listarPensamento'])

           
          }

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  }

  constructor(
    private router : Router,
    private service : PensamentoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') //o snapshot faz uma captura instantanea da rota
    this.service.buscaId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

}
