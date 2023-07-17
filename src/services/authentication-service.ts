import { TokensIM, UserAuthApi, UserIM, UserLM } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service"

export class AuthenticationService extends WebApiService {
  userAuthApi: UserAuthApi;

  constructor() {
    super();
    this.userAuthApi = new UserAuthApi();
  }

  public async makeLoginRequest(email: string, password: string): Promise<AxiosResponse<void, any>> {
    const userLM: UserLM = ({
        email: email,
        password: password,
    });

    return await this.userAuthApi.apiUserAuthLoginPost(userLM, this.generateHeader());
  }

  public async makeRegisterRequest(firstName: string, lastName: string, email: string, password: string): Promise<AxiosResponse<void, any>> {
    const userIM: UserIM = ({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    });

    return await this.userAuthApi.apiUserAuthRegisterPost(userIM, this.generateHeader());
  }

  public async renewToken(accessToken: string | null, refreshToken: string | null): Promise<AxiosResponse<void, any>> {
    const tokensIM: TokensIM = ({
        accessToken: accessToken,
        refreshToken: refreshToken,
    });

    return await this.userAuthApi.apiUserAuthRenewPost(tokensIM, this.generateHeader());
  }
}

const authenticationService = new AuthenticationService();
export default authenticationService;