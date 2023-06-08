import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"

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
}
