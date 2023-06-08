import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { TituloInvestimento } from "./TituloInvestimento";

@Entity()
export class Operacao {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    tipo_operacao: string

    @Column()
    mercado: string

    @Column()
    trade: string

    @Column()
    data_operacao: Date

    @Column()
    quantidade: number

    @Column()
    valor: number

    @Column()
    corretagem: number

    @Column()
    taxa_liquidacao: number

    @Column()
    emolumentos: number

    @Column()
    ir_retido: number

    @Column()
    nota_corretagem: number

    @Column()
    lucro_prejuizo: number

    @ManyToOne(type => Operacao)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario

    @ManyToOne(type => TituloInvestimento)
    @JoinColumn({ name: 'titulo_investimento_id' })
    investimento: TituloInvestimento
}