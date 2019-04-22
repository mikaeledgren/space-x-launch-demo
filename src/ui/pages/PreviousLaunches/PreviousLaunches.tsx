import './PreviousLaunches.css';

import { observer } from 'mobx-react';
import React from 'react';

import ListedLaunch from '../../components/ListedLaunch/ListedLaunch';
import Search from '../../components/Search/Search';
import previousLaunchesState from './PreviousLaunches.state';

@observer
class PreviousLaunches extends React.Component {
  componentWillMount() {
    previousLaunchesState.load();
  }
  //<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
  render() {
    const {
      count,
      countFiltered,
      countSuccessful,
      hasFiltered,
      filteredLaunches,
    } = previousLaunchesState;
    return (
      <div className="previous-launches-container">
        <div className="previous-launches-header">
          <h1>Previous launches</h1>
          <div className="previous-launches-header-sub">
            There have been {count} launches, of which {countSuccessful} were
            successful
          </div>
        </div>
        <div className="previous-launches-search">
          <Search />
          {hasFiltered ? (
            <small>
              Showing {countFiltered} out of {count}
            </small>
          ) : null}
        </div>
        <div className="previous-launches">
          {filteredLaunches.map((launch, i) => (
            <ListedLaunch
              key={i}
              launch={launch}
              unsuccessful={!launch.launch_success}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PreviousLaunches;
