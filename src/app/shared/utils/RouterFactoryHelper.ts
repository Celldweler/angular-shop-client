import {Image} from "../models/Image.model";
import {API_URL} from "../constants";

export class RouterFactoryHelper {
  public static fileEndpoint(file: Image) {
    return `${API_URL}/api/files/${file?.fileName}/${file?.type}`;
  }
}
