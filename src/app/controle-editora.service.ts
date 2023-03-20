import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Editora } from './Editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  obterEditoras() {
    throw new Error('Method not implemented.');
  }

  editoras: Editora[] = [
    {
      codEditora: 1,
      nome: "Alta Books",
    },
    {
      codEditora: 2,
      nome: "Pearson",
    },
    {
      codEditora: 3,
      nome: "Addison Wesley",
    }
    
  ];
  buscaNomeEditora(codigoEditora: number) {
    return this.editoras.filter((editoras) => {
      return editoras.codEditora === codigoEditora;
    });
  }

  getEditoras(): Observable<Editora[]> {
    return of(this.editoras);
  }

  constructor() {}
}
