import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TituloInvestimento } from "./TituloInvestimento";

@Entity()
export class Rendimento {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    tipo: string

    @Column()
    quantidade: number

    @Column()
    valor_cota: number

    @ManyToOne(type => TituloInvestimento)
    @JoinColumn({ name: 'titulo_investimento_id' })
    titulo: TituloInvestimento
}