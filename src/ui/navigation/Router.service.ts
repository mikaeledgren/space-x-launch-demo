import createRouter, { Router, Options } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { mobxPlugin } from 'mobx-router5';
import routes from './routes';
import { routerStore } from '../../stores';
import { computed } from 'mobx';

class RouterService {
  options: Partial<Options> = {
    defaultRoute: 'upcoming',
  };

  @computed
  get router(): Router {
    return routerStore.router;
  }

  init = (): void => {
    const router = createRouter(routes, this.options);
    router.usePlugin(browserPlugin({}));
    router.usePlugin(mobxPlugin(routerStore));
    router.start();
    console.debug('Router initialised');
  };
}

const routerService = new RouterService();
export default routerService;
