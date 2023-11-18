import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { TituloInvestimento } from "./TituloInvestimento";

@Entity()
export class Operacao {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    tipo_operacao: string

    @Column({ nullable: true })
    mercado: string

    @Column({ nullable: true })
    trade: string

    @Column()
    data_operacao: string

    @Column()
    quantidade: number

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    valor: number

    @Column({ nullable: true })
    corretagem: number

    @Column({ nullable: true })
    taxa_liquidacao: number

    @Column({ nullable: true })
    emolumentos: number

    @Column({ nullable: true })
    ir_retido: number

    @Column({ nullable: true })
    nota_corretagem: number

    @Column({ nullable: true })
    lucro_prejuizo: number

    @ManyToOne(type => Usuario, { cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario

    @ManyToOne(type => TituloInvestimento, { cascade: ['insert', 'update'] })
    @JoinColumn({ name: 'titulo_investimento_id' })
    investimento: TituloInvestimento
}