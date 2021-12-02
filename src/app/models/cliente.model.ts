import { Endereco } from './endereco.model';

export class Cliente{
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    email: string;
    perfil: number;
    endereco: Endereco;
    senha: string;
}