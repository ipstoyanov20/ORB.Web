import { WorkExperienceApi, WorkExperienceIM, WorkExperienceUM, WorkExperienceVM } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"

export class WorkExperienceService extends WebApiService {
    WEApi: WorkExperienceApi;

    constructor() {
        super();
        this.WEApi = new WorkExperienceApi();
    }

    public async makeDeleteWorkExperienceFromIdRequest(id: string): Promise<AxiosResponse<void>> {
        return await this.WEApi.apiWorkExperienceIdDelete(id, this.generateHeader());
    }

    public async makeGetWorkExperienceFromIdRequest(id: string): Promise<AxiosResponse<WorkExperienceVM>> {
        return await this.WEApi.apiWorkExperienceIdGet(id, this.generateHeader());
    }

    public async makeUpdateWorkExperienceFromIdRequest(id: string, companyName: string, position: string, description: string, startDate: string, endDate: string | null): Promise<AxiosResponse<WorkExperienceVM>> {
        const body: WorkExperienceUM = ({
            companyName,
            position,
            description,
            startDate,
            endDate
        })
        return await this.WEApi.apiWorkExperienceIdPut(id, body,  this.generateHeader());
    }

    public async makeNewWorkExperienceRequest(resumeId: string, companyName: string, position: string, description: string, startDate: string, endDate: string | null): Promise<AxiosResponse<WorkExperienceVM>> {
        const body: WorkExperienceIM = ({
            resumeId,
            companyName,
            position,
            description,
            startDate,
            endDate
        })

        return await this.WEApi.apiWorkExperiencePost(body, this.generateHeader());
    }
}

const workExperienceService = new WorkExperienceService();
export default workExperienceService;