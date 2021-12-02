import { Localidade } from './localidade.model';

export class Voo{
    id: number;
    origem: Localidade;
    destino: Localidade;
    dataHoraVoo: Date;
    quantidade: number;
    valor: number;
    numeroVoo: string;
}