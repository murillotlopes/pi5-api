import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Usuario } from '../../entities/Usuario';
import { Request } from 'express';


class UsuarioRepositorio {
  private rep: Repository<Usuario>
  constructor() {
    this.rep = AppDataSource.getRepository(Usuario)
  }

  public async filtrarEntidade(req: Request) {
    try {
      // geradorQueryBuilder(req, AppDataSource, Usuario)
      let query = this.rep.createQueryBuilder('u').innerJoinAndSelect('u.telefones', 't').innerJoinAndSelect('u.endereco', 'e').innerJoinAndSelect('e.cidade', 'c')
      // .andWhere(`a.administrar = true`)

      //return await query.getMany()
      //return await query.getRawMany()
    } catch (error) {
      return error
    }
  }
}

export default new UsuarioRepositorio()