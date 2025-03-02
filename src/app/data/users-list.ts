import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
    {
        nome: "Lucas Barbosa",
        email: "lucas@gmail.com",
        senha: "senha-segura-123",
        idade: 25,
        endereco: {
            rua: "Avenida Paulista",
            numero: 1000,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11987654321",
        ativo: true,
        funcao: "Engenheiro de Software",
        dataCadastro: "2024-12-15T10:30:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2025-02-20T14:30:00.000Z"
        }
    },
    {
        nome: "Luiz Fernando",
        email: "luiz@gmail.com",
        senha: "senha-segura-123",
        idade: 30,
        endereco: {
            rua: "Rua das Acácias",
            numero: 45,
            cidade: "Fortaleza",
            estado: "CE",
            pais: "Brasil"
        },
        telefone: "85999887766",
        ativo: false,
        funcao: "Analista de Sistemas",
        dataCadastro: "2023-08-22T08:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2025-02-19T18:45:00.000Z"
        }
    },
    {
        nome: "Leonardo Silva",
        email: "leonardo@gmail.com",
        senha: "senha-segura-123",
        idade: 28,
        endereco: {
            rua: "Rua XV de Novembro",
            numero: 300,
            cidade: "Curitiba",
            estado: "PR",
            pais: "Brasil"
        },
        telefone: "41999988776",
        ativo: true,
        funcao: "Desenvolvedor Mobile",
        dataCadastro: "2024-05-10T12:15:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2025-02-18T11:00:00.000Z"
        }
    },
    {
        nome: "Eduardo Aureliano",
        email: "eduardo@gmail.com",
        senha: "senha-segura-123",
        idade: 26,
        endereco: {
            rua: "Avenida Brasil",
            numero: 789,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21987654321",
        ativo: true,
        funcao: "Arquiteto de Software",
        dataCadastro: "2022-11-05T15:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2025-02-17T20:10:00.000Z"
        }
    },
    {
        nome: "Vitor Sampaio",
        email: "vitor@gmail.com",
        senha: "senha-segura-123",
        idade: 32,
        endereco: {
            rua: "Rua das Flores",
            numero: 250,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31998765432",
        ativo: false,
        funcao: "CTO",
        dataCadastro: "2021-07-18T09:45:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2025-02-16T08:30:00.000Z"
        }
    }
];
