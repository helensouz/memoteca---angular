import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {path: '', redirectTo: 'listarPensamento',  pathMatch: 'full'},
  {path: 'listarPensamento', component: ListarPensamentosComponent },
  {path: 'criarPensamento', component: CriarPensamentosComponent},
  {path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent},
  {path: 'pensamentos/editarPensamento/:id', component: EditarPensamentoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
