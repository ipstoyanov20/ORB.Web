import { UpdatePasswordModel, UserApi, UserUM, UserVM } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"

export class UserService extends WebApiService {
  userApi: UserApi;

  constructor() {
    super();
    this.userApi = new UserApi();
  }

  public async makeUpdateUserRequest(firstName: string | undefined, lastName: string | undefined, email:string | undefined): Promise<AxiosResponse<void, any>> {
    const userLM: UserUM = ({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });

    return await this.userApi.apiUserPut(userLM, this.generateHeader());
    
    }
    
    public async makeChangePasswordRequest(oldPassword: string, newPassword: string ): Promise<AxiosResponse<void, any>> {
        
        const changePass: UpdatePasswordModel = ({
            oldPassword: oldPassword,
            newPassword: newPassword,        
        });
        
        return await this.userApi.apiUserChangePasswordPost(changePass, this.generateHeader());
    }

    public async makeGetCurrentUserRequest(): Promise<AxiosResponse<UserVM, any>> {

        return await this.userApi.apiUserCurrentGet(this.generateHeader());
    }
}
const userService = new UserService();
export default userService;