import { DeleteResult, Repository } from "typeorm";
import { Rent } from "../entities/Rent";
import AppDataSource from "../data-source";

interface IRentRepo {
  save: (rent: Partial<Rent>) => Promise<Rent>;
  delete: (rentId: string) => Promise<DeleteResult>;
  listAll: () => Promise<Rent[]>;
  retrieve: (payload: object) => Promise<Rent | null>;
}

class RentRepository implements IRentRepo {
  private rentRepo: Repository<Rent>;

  constructor() {
    this.rentRepo = AppDataSource.getRepository(Rent);
  }

  save = async (rent: Partial<Rent>): Promise<Rent> =>
    await this.rentRepo.save(rent);

  listAll = async (): Promise<Rent[]> => await this.rentRepo.find();

  retrieve = async (payload: object) =>
    await this.rentRepo.findOneBy({ ...payload });

  delete = async (rentId: string) => await this.rentRepo.delete(rentId);
}

export default new RentRepository();
