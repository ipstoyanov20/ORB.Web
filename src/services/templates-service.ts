import { TemplatesApi, TemplateVM } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"

export class TemplatesService extends WebApiService {
    templatesApi: TemplatesApi;

    constructor() {
        super();
        this.templatesApi = new TemplatesApi();
    }

    public async makeGetTemplatesRequest(): Promise<AxiosResponse<Array<TemplateVM>>> {
        return await this.templatesApi.apiTemplatesGet(this.generateHeader());
    }

    public async makeGetTemplateFromIdRequest(id: string): Promise<AxiosResponse<TemplateVM>> {
        return await this.templatesApi.apiTemplatesIdGet(id, this.generateHeader());
    }
}

const templatesService = new TemplatesService();
export default templatesService;