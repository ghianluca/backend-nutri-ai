import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateNutritionService } from '../services/CreateNutritionService'

class CreateNutritionController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        console.log("Deu certo, rota chamada!!")

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute();

        reply.send(nutrition);
    }
}

export { CreateNutritionController }