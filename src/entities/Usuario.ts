import { Endereco } from './Endereco';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"
import { Telefone } from "./Telefone"

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  nome: string

  @Column({ unique: true })
  email: string

  @Column()
  senha: string

  @Column({ default: null })
  idade: number

  @Column({ default: false })
  administrador: boolean

  @OneToMany(type => Telefone, (telefone) => telefone.usuario)
  telefones: Telefone[]

  @OneToOne(type => Endereco, (endereco) => endereco.usuario)
  endereco: Endereco

}
