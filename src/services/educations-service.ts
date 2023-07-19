import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"
import { EducationIM, EducationUM, EducationVM, EducationsApi } from "../api";

export class EducationsService extends WebApiService {
    educationsApi: EducationsApi;
  
    constructor() {
      super();
      this.educationsApi = new EducationsApi();
    }
      /*Get Education By Id*/
    public async makeGetEducationsRequest(id : string): Promise<AxiosResponse<EducationVM,any>>{

        return await this.educationsApi.apiEducationsIdGet(id, this.generateHeader())
    }
    
    /*Post New Education*/
    public async makePostEducationRequest(resumeId: string, schoolName:string, degree:string, fieldOfStudy:string, description:string, startDate: string, endDate: string ): Promise<AxiosResponse<EducationVM, any>> {
        const EducationIM: EducationIM = ({
           resumeId: resumeId,
           schoolName : schoolName,
           degree : degree,
           fieldOfStudy : fieldOfStudy,
           description : description,
           startDate : startDate,
           endDate : endDate
        
        });
    
        return await this.educationsApi.apiEducationsPost(EducationIM, this.generateHeader());
        }
    /*Update Education*/
    public async makePutEducationRequest(id: string, schoolName: string, degree:string, fieldOfStudy:string, description:string, startDate: string, endDate: string):Promise<AxiosResponse<EducationVM,any>>{
        const EducationUM : EducationUM = ({
         
            schoolName : schoolName,
            degree : degree,
            fieldOfStudy: fieldOfStudy,
            description : description,
            startDate : startDate,
            endDate: endDate


        });

        return await this.educationsApi.apiEducationsIdPut(id,EducationUM, this.generateHeader());
    }
    /*Delete Education*/
    public async MakeDeleteEducationRequest( id: string):Promise<AxiosResponse<void,any>>{

      return await this.educationsApi.apiEducationsIdDelete(id, this.generateHeader());

    }
   
    
  }
  const educationsService = new EducationsService();
  export default educationsService;