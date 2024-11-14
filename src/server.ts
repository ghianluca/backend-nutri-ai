import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes';

const app = Fastify({ logger: true })
dotenv.config();

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})
const start = async () => {
    const port = Number(process.env.PORT) || 3333;
    app.register(cors);
    app.register(routes);

    try {
        await app.listen({ port, host: "0.0.0.0" });
        console.log(`Servidor rodando na porta ${port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();