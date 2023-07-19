import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"
import { PersonalInfoApi, PersonalInfoVM, PersonalInfoIM } from "../api";

export class PersonalInfoService extends WebApiService {
    personalInfoApi: PersonalInfoApi;
  
    constructor() {
      super();
      this.personalInfoApi = new PersonalInfoApi();
    }
      /*Get PersonalInfo By Id*/
    public async makeGetPersonalInfoRequest(id : string): Promise<AxiosResponse<PersonalInfoVM,any>>{

        return await this.personalInfoApi.apiPersonalInfoIdGet(id, this.generateHeader())
    }

    /*Update PersonalInfo By Id*/
    public async makePutPersonalInfoRequest(id: string, fullName: string, address:string, phoneNumber:string, email:string, summary: string):Promise<AxiosResponse<PersonalInfoVM,any>>{
        const PersonalInfoIM : PersonalInfoIM = ({
         
           fullName: fullName,
           address: address,
           phoneNumber: phoneNumber,
           email: email,
           summary:summary

        });

        return await this.personalInfoApi.apiPersonalInfoIdPut(id, this.generateHeader());
    }
 
  
  }
  const personalInfoService = new PersonalInfoService();
  export default personalInfoService;