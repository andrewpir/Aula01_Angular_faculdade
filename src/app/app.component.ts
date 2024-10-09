import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'Descição do item';

  clientPremium = false;

  valor: {
    descricao: string,
    nome : string,
    id: number
  } = {
    descricao: 'descrição do item',
    nome : 'nome',
    id: 1
  };
  paras = [{
    descricao: 'teste descrição',
    nome : 'nome',
    id: 1
  }, {
    descricao: 'descrição do item 2',
    nome : 'nome 2',
    id: 2
  }, {
    descricao: 'descrição do item 3',
    nome : 'nome 3',
    id: 3
  }];

  adicionar(){
    this.paras.push({descricao: this.entrada.descricao, nome: this.entrada.nome, id: this.entrada.id});
  };

  entrada: {
    descricao: string,
    nome : string,
    id: number
  } = {
    descricao: 'descrição do item',
    nome : 'nome',
    id: 1
  };
}
