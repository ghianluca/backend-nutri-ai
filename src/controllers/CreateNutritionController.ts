import { FastifyRequest, FastifyReply } from 'fastify';

class CreateNutritionController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        console.log("Deu certo, rota chamada!!")

        reply.send({ message: "Aí sim meu cumpadi, rota chamada!!" })
    }
}

export { CreateNutritionController }