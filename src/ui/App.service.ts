import moment from 'moment';
import 'moment/locale/en-gb';
import axiosService from '../logic/Axios.service';
import routerService from './navigation/Router.service';
import l from '../logic/Logger';
import routerStore from './navigation/Router.store';
import { autorun } from 'mobx';
class AppService {
  init = (): void => {
    this.initMoment();
    axiosService.init();
    routerService.init();
  };

  private initMoment = (): void => {
    const locale = 'en-gb';
    moment.locale(locale);
    l.debug('moment initialized');
  };
}

const appService = new AppService();
export default appService;
