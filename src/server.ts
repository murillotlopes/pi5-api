import { config } from "dotenv"
import app from "./app"
import { AppDataSource } from "./data-source"

config()

AppDataSource.initialize().then(async () => {
	console.log('Banco de dados conectado')
	const porta = process.env.PORT || 3001
	app.listen(porta, () => {
		console.log(`API rodando na porta ${porta}`)
	})
}).catch(error => {
	console.error(error)
})
