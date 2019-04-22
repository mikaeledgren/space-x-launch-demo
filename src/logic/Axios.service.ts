import axios from 'axios';
import l from './Logger';

class AxiosService {
  private BASE_URL: string = 'https://api.spacexdata.com/v3';

  init = (): void => {
    axios.defaults.baseURL = this.BASE_URL;
    l.debug('Axios initialised');
  };
}

const axiosService = new AxiosService();
export default axiosService;
