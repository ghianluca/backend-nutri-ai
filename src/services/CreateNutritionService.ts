import { DataProps } from '../controllers/CreateNutritionController';

class CreateNutritionService {
    async execute({ name, weight, height, age, gender, objective, level }: DataProps){
        console.log("Test")

        return { message: "É isso ai, deu certo o service!" }
    }
}

export { CreateNutritionService }