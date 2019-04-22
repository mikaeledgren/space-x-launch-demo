import { RouterStore as Router5Store } from 'mobx-router5';
import { computed } from 'mobx';
import routes, { Route } from './routes';

class RouterStore extends Router5Store {
  @computed
  get isStarted() {
    return this.router.isStarted();
  }

  @computed
  get currentComponent() {
    const route: Route = routes.filter(
      route => route.name === this.route.name
    )[0];
    return route.component;
  }
}

const routerStore = new RouterStore();

export default routerStore;
