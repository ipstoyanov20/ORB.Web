import storageService from "./storage-service";

export abstract class WebApiService {
  protected generateHeader(): object {
    return {
      headers: {
        Authorization: `Bearer ${storageService.retrieveAccessToken()}`,
      },
    }
  }
}