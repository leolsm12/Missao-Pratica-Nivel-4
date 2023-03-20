import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Livro } from './Livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: "Use a Cabeça: Java",
      resumo:"Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
      autores: [" Bert Bates "," Kathy Sierra "],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: "Java, como programar",
      resumo: "Milhões de alunos e profissionais aprenderam, programação e desenvolvimento de software com os livros de deitel",
      autores: [" Paul Deitel "," Harvey Deitel "],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: "Core java for the impatient",
      resumo:
      "Eaders familiar with Horstmann's original, two-volume \"Core java\" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of java Se 9 will learn how these new features impact the language and core libraries",
      autores: ["Cay Horstmann"],
    },
  ];


  obterLivros(): Observable<Livro[]> {
    return of(this.livros);
  }

  incluir(receberLivro: Livro): void {
    const maiorCod =
      this.livros.reduce(
        (esteCod, livros) => Math.max(esteCod, Number(livros.codigo)),
        0
      ) + 1;

    const adicionarLivro = {
      codigo: maiorCod,
      codEditora: Number(receberLivro.codEditora),
      titulo: receberLivro.titulo,
      resumo: receberLivro.resumo,
      autores: receberLivro.autores,
    };

    this.livros.push(adicionarLivro);
  }

  remove(codLivro: number) {
    const index = this.livros.findIndex((livro) => livro.codigo === codLivro);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

  constructor() {}
}
