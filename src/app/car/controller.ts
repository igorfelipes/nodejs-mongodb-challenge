import {
  Body,
  Get,
  Patch,
  Post,
  Route,
  Security,
  Tags,
} from "tsoa";
import { Car } from '../../domain/entities/car'
import { CreateCar, LoadAllCar, LoadCarById } from '../../domain/usecases/cars'
import { makeCarService } from '../../infra/factories/services/carServiceFactory'
import { CreateCarInput } from './types'



@Tags("Cars")
@Security("bearerAuth")
@Route("cars")
class CarHandler {
  constructor(
    private readonly service: LoadAllCar & LoadCarById & CreateCar 
  ) {}

  @Get("/")
  async loadAll() {
    const cars = await this.service.loadAll();
    return cars as Car[]
  }

  @Get("/:id")
  async loadById(id: string) {
    return await this.service.loadById(id);
  }

  @Post("/")
  async create(@Body() body: CreateCarInput) {
    return await this.service.create(body);
  }

}
const service = makeCarService();
export default new CarHandler(service);
