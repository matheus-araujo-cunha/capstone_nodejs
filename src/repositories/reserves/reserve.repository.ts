import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Reserve } from "../../entities/Reserve";
import AppDataSource from "../../data-source";

interface IReserveRepo {
  save: (reserve: Partial<Reserve>) => Promise<Reserve>;
  delete: (reserveId: string) => Promise<DeleteResult>;
  listAll: () => Promise<Reserve[]>;
  retrieve: (payload: object) => Promise<Reserve | null>;
  update: (payload: object, reserveId: string) => Promise<UpdateResult>;
}

class ReserveRepository implements IReserveRepo {
  private reserveRepo: Repository<Reserve>;

  constructor() {
    this.reserveRepo = AppDataSource.getRepository(Reserve);
  }

  save = async (reserve: Partial<Reserve>): Promise<Reserve> =>
    await this.reserveRepo.save(reserve);

  listAll = async (): Promise<Reserve[]> => await this.reserveRepo.find();

  retrieve = async (payload: object) =>
    await this.reserveRepo.findOneBy({ ...payload });

  delete = async (reserveId: string) => await this.reserveRepo.delete(reserveId);

  update = async (payload: object, reserveId: string) => {
    return await this.reserveRepo.update(reserveId, { ...payload });
  };
}

export default new ReserveRepository();