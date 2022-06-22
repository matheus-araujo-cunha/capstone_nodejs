import rateRepository from "../../repositories/rates/rate.repository";
import { Request } from "express";
import { Rate } from "../../entities/Rate";



const updateRateService = async ({
    params,
    body,
  }: Request): Promise<Partial<Rate>> => {
    const {id}= params

    await rateRepository.update(id, body as Partial<Rate>);
    
    const rate = await rateRepository.retrieve({userUuid:id}) as Rate

    

    return rate
  };

  export default updateRateService