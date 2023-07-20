import { ResumesApi, ResumeIM, ResumeVM, EducationVM, WorkExperienceVM, ShareIM } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"

export class ResumesService extends WebApiService {
    resumesApi: ResumesApi;

    constructor() {
        super();
        this.resumesApi = new ResumesApi();
    }

    public async makeGetResumesRequest(): Promise<AxiosResponse<Array<ResumeVM>>> {
        return await this.resumesApi.apiResumesGet(this.generateHeader());
    }

    public async makeGetResumeFromIdRequest(id: string): Promise<AxiosResponse<ResumeVM>> {
        return await this.resumesApi.apiResumesIdGet(id, this.generateHeader());
    }

    public async makeUpdateResumeFromIdRequest(id: string, resumeTitle: string, templateId: string): Promise<AxiosResponse<ResumeVM>> {
        const body:ResumeIM = ({
            title: resumeTitle,
            templateId: templateId,
        });

        return await this.resumesApi.apiResumesIdPut(id, body, this.generateHeader());
    }

    public async makeNewResumeRequest(resumeTitle: string, templateId: string): Promise<AxiosResponse<ResumeVM>> {
        const body:ResumeIM = ({
            title: resumeTitle,
            templateId: templateId,
        });

        return await this.resumesApi.apiResumesPost(body, this.generateHeader());
    }

    public async makeDeleteResumeRequest(id: string): Promise<AxiosResponse<void>> {
        return await this.resumesApi.apiResumesIdDelete(id, this.generateHeader());
    }

    public async makeGetEducationsFromResumeIdRequest(id: string): Promise<AxiosResponse<Array<EducationVM>>> {
        return await this.resumesApi.apiResumesIdEducationsGet(id, this.generateHeader());
    }

    public async makeGetWorkExperienceFromResumeIdRequest(id: string): Promise<AxiosResponse<Array<WorkExperienceVM>>> {
        return await this.resumesApi.apiResumesIdWorkGet(id, this.generateHeader());
    }

    public async downloadResumeAsPdf(id: string): Promise<AxiosResponse<string>> {
        return await this.resumesApi.apiResumesIdDownloadGet(id, this.generateHeader()) as unknown as AxiosResponse<string>;
    }

    public async shareResume(id: string, email: string): Promise<AxiosResponse<void>> {
        const shareIM: ShareIM = ({
            email: email
        });

        return await this.resumesApi.apiResumesIdPost(id, shareIM, this.generateHeader());
    }
}

const resumesService = new ResumesService();
export default resumesService;