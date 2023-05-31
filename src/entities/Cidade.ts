import { Endereco } from './Endereco';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cidade {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nome: string

    @Column()
    uf: string

    @OneToMany(type => Endereco, (endereco) => endereco.cidade)
    enderecos: Endereco[]
}