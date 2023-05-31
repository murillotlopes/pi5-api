import { Usuario } from './Usuario';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Telefone {
	@PrimaryGeneratedColumn('increment')
	id: number

	@Column()
	numero: string

	@ManyToOne(type => Telefone)
	@JoinColumn({ name: 'usuario_id' })
	usuario: Usuario
}