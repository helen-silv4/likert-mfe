import { FormularioStrategy } from "./formulario.strategy";

export class FluxoGeralStrategy implements FormularioStrategy {
    titulo: string = 'Como foi sua experiência?';
    avaliacao: number = 0;
    feedbackRapido: string[] = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5'];
    feedback: string = '';
}