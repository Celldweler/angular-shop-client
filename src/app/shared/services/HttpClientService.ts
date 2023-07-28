import {HttpClient} from "@angular/common/http";
import {API_URL} from "../constants";

export class HttpClientService {
  readonly _apiUrl : string = API_URL;
  constructor(private httpClient: HttpClient) {
  }


}
