import { Component, Input } from '@angular/core';
import { FormularioStrategy } from '../../strategies/formulario.strategy';
import { FluxoGeralStrategy } from '../../strategies/fluxo-geral.strategy';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-likert-geral',
  standalone: false,
  templateUrl: './likert-geral.html',
  styleUrl: './likert-geral.scss',
})
export class LikertGeral {
  @Input() strategy: FormularioStrategy = new FluxoGeralStrategy();

  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = new FormGroup({
      avaliacao: new FormControl(null),
      feedbackRapido: new FormControl(null),
      feedback: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  emojis = [
    { emoji: '😊', faixa: '9-10', rotulo: 'Muito Satisfeito', cor: 'green' },
    { emoji: '🙂', faixa: '7-8', rotulo: 'Satisfeito', cor: 'lightgreen' },
    { emoji: '😐', faixa: '5-6', rotulo: 'Neutro', cor: 'yellow' },
    { emoji: '😕', faixa: '3-4', rotulo: 'Insatisfeito', cor: 'orange' },
    { emoji: '😢', faixa: '1-2', rotulo: 'Muito Insatisfeito', cor: 'red' },
  ];
}   
