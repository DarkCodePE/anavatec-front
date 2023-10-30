export interface Tecnico {
    id?: any;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    perfis: string[];
    dataCriacao: any;
}
export interface ProfileRequestDTO {
    id: number;
    phone: string;
    address: string;
    resume: string;
    birthDate: string;
    tecnicoId: number;
}