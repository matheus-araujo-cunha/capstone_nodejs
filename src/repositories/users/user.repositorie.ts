import AppDataSource from "../../data-source"
import { DeleteResult, Repository, UpdateResult } from "typeorm"
import {User} from "../../entities/User"
import { hash } from "bcrypt"

interface IUserRepo{

    save:(user:User)=>Promise<User>
    update:(uuid:string,payload:Partial<User>)=>Promise<UpdateResult>
    delete:(uuid:string)=>Promise<DeleteResult>
    retrieve: (payload: object) => Promise<User | null>;
    
}
class UseRepository implements IUserRepo {
    
    private repo:Repository<User>

    constructor(){
        
        this.repo = AppDataSource.getRepository(User)
    }
    save=async (user: User) =>await this.repo.save(user);

    
    update= async(uuid: string, payload: Partial<User>) =>{
        if(payload.password){
            payload.password = await hash(payload.password,10)
        }
        return this.repo.update(uuid,{...payload})
    }
    
    delete = async (uuid:string)=>{
        return await this.repo.delete(uuid)
    }
    
    retrieve = async (payload: object) => await this.repo.findOneBy({ ...payload });
}

 export default new UseRepository()