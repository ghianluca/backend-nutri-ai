import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionController } from './controllers/CreateNutritionController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/test", (request: FastifyRequest, reply: FastifyReply) => {
        
        let responseText = "```json\n{\n  \"nome\": \"Ghianluca\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 24,\n  \"altura\": 175,\n  \"peso\": 95,\n  \"objetivo\": \"Definicao e Ganho de Musculo\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"2 fatias de pao integral\",\n        \"1 ovo mexido\",\n        \"1 banana\",\n        \"200ml de leite desnatado\",\n        \"1 colher de sopa de aveia\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manha\",\n        \"alimentos\": [\n          \"1 iogurte grego com granola\",\n          \"1 fruta (maça ou laranja)\"\n        ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"100g de arroz integral\",\n        \"100g de batata doce\",\n        \"Salada verde com azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 banana\"\n      ]\n    },\n    {\n      \"horario\": \"18:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"100g de quinoa\",\n        \"100g de brócolis\",\n        \"Salada verde com azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"20:00\",\n      \"nome\": \"Lanche antes de Dormir\",\n      \"alimentos\": [\n        \"1 scoop de casein protein\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Growth Whey Protein\",\n    \"Growth Casein Protein\",\n    \"Growth Creatina\"\n  ]\n}\n```"

        try {
            
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString);

            return reply.send({ data: jsonObject });

        } catch (err) {
            console.log(err)
        }

        reply.send({ ok: true })
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
}