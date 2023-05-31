import express from "express";
import registroRotas from "./project/rotasApi";

const app = express()

app.use(express.json())
registroRotas(app)

export default app