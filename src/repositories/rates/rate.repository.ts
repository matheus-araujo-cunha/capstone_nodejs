import AppDataSource from "../../data-source"
import { DeleteResult, Repository, UpdateResult } from "typeorm"
import {Rate} from "../../entities/Rate"
import { hash } from "bcrypt"

interface IRateRepo{

    save:(user:Partial<Rate>)=>Promise<Rate>
    update:(uuid:string,payload:Partial<Rate>)=>Promise<UpdateResult>
    delete:(uuid:string)=>Promise<DeleteResult>
    retrieve: (payload: object) => Promise<Rate | null>;
    
}

class UseRepository implements IRateRepo {
    
    private repo:Repository<Rate>

    constructor(){
        
        this.repo = AppDataSource.getRepository(Rate)
    }
    save=async (rate: Partial<Rate>) =>await this.repo.save(rate);

    
    update= async(uuid: string, payload: Partial<Rate>) =>{
        return this.repo.update(uuid,{...payload})
    }
    
    delete = async (uuid:string)=>{
        return await this.repo.delete(uuid)
    }
    
    retrieve = async (payload: object) => await this.repo.findOneBy({ ...payload });
}

 export default new UseRepository()