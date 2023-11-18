import express from "express";
import registroRotas from "./project/rotaApi";
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())
registroRotas(app)

export default app