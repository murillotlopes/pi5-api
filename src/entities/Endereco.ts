import { Usuario } from './Usuario';
import { Cidade } from './Cidade';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Endereco {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ nullable: true })
    logradouro: string

    @Column({ nullable: true })
    numero: string

    @Column({ nullable: true })
    bairro: string

    @ManyToOne(type => Cidade)
    @JoinColumn({ name: 'cidade_id' })
    cidade: Cidade

    @OneToOne(type => Usuario, (usuario) => usuario.endereco)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario
}