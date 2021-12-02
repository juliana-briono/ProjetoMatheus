import { Localidade } from './localidade.model';
import { Cliente } from './cliente.model';
import { Voo } from './voo.model';

export class Venda{
    id: number;
    cliente: Cliente;
    voo: Voo;
    momentoDaCompra: Date;
}