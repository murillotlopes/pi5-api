import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Operacao } from "./Operacao";
import { Rendimento } from "./Rendimento";

@Entity()
export class TituloInvestimento {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    ticket: string

    @Column()
    nome_empresa: string

    @Column({ nullable: true })
    cnpj: string

    @Column({ nullable: true })
    tipo: string

    @Column({ nullable: true })
    segmento: string

    @Column({ nullable: true })
    divident_yield: string

    @Column({ nullable: true })
    cota_rendimento: number

    @OneToMany(type => Operacao, (operacao) => operacao.investimento)
    operacoes: Operacao[]

    @OneToMany(type => Rendimento, (rendimento) => rendimento.titulo)
    rendimentos: Rendimento[]
}