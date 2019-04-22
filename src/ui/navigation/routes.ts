import { ReactComponentLike } from 'prop-types';
import { RouteDefinition } from 'route-node';

import PreviousLaunches from '../pages/PreviousLaunches/PreviousLaunches';
import UpcomingLaunches from '../pages/UpcomingLaunches/UpcomingLaunches';

export interface Route extends RouteDefinition {
  component: ReactComponentLike;
}

const routes: Route[] = [
  { name: 'upcoming', path: '/upcoming', component: UpcomingLaunches },
  { name: 'previous', path: '/previous', component: PreviousLaunches },
];

export default routes;
