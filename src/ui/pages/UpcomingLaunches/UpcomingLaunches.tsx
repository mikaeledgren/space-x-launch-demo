import React from 'react';
import upcomingLaunchesState from './UpcomingLaunches.state';
import { observer } from 'mobx-react';
import ListedLaunch from '../../components/ListedLaunch/ListedLaunch';
import Search from '../../components/Search/Search';
import l from '../../../logic/Logger';
import searchState from '../../components/Search/Search.state';
import './UpcomingLaunches.css';
import './UpcomingLaunches.css';

@observer
class UpcomingLaunches extends React.Component {
  componentWillMount() {
    upcomingLaunchesState.load();
  }
  //<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
  render() {
    const {
      count,
      countFiltered,
      hasFiltered,
      filteredLaunches,
    } = upcomingLaunchesState;
    return (
      <div className="upcoming-launches-container">
        <div className="upcoming-launches-header">
          <h1>Upcoming launches</h1>
          <div className="upcoming-launches-header-sub">
            There are {count} launches coming up
          </div>
        </div>
        <div className="upcoming-launches-search">
          <Search />
          {hasFiltered ? (
            <small>
              Showing {countFiltered} out of {count}
            </small>
          ) : null}
        </div>
        <div className="upcoming-launches">
          {filteredLaunches.map((launch, i) => (
            <ListedLaunch key={i} launch={launch} undecided={launch.tbd} />
          ))}
        </div>
      </div>
    );
  }
}

export default UpcomingLaunches;
