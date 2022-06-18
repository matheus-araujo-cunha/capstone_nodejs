import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Item } from "../../entities/Item";
import AppDataSource from "../../data-source";

interface IItemRepo {
  save: (item: Partial<Item>) => Promise<Item>;
  getAll: () => Promise<Item[]>;
  retrieve: (payload: object) => Promise<Item | null>;
  update: (itemId: string, payload: object) => Promise<UpdateResult>;
  delete: (itemId: string) => Promise<DeleteResult>;
}

class ItemRepository implements IItemRepo {
  private itemRepo: Repository<Item>;

  constructor() {
    this.itemRepo = AppDataSource.getRepository(Item);
  }

  save = async (item: Partial<Item>): Promise<Item> =>
    await this.itemRepo.save(item);

  getAll = async (): Promise<Item[]> => await this.itemRepo.find();

  retrieve = async (payload: object) =>
    await this.itemRepo.findOneBy({ ...payload });

  update = async (
    itemId: string,
    payload: Partial<Item>
  ): Promise<UpdateResult> => {
    payload.updatedAt = new Date();

    return await this.itemRepo.update(itemId, { ...payload });
  };

  delete = async (itemId: string): Promise<DeleteResult> =>
    await this.itemRepo.delete(itemId);
}

export default new ItemRepository();
