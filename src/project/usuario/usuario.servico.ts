import { Response, Request } from 'express';

import usuarioRepositorio from "./usuario.repositorio"

class UsuarioServico {

	public async filtrarEntidade(req: Request) {
		// try {
		// 	return await usuarioRepositorio.filtrarEntidade(req)
		// } catch (error) {
		// 	return error
		// }
	}
}

export default new UsuarioServico()