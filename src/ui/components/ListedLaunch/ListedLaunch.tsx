import React from 'react';
import Launch from '../../../domain/Launch';
import l from '../../../logic/Logger';
import './ListedLaunch.css';
import moment from 'moment';
import listedLaunchService from './ListedLaunch.service';
import { FiCheckCircle } from 'react-icons/fi';
import classnames, { ClassArray } from 'classnames';

export interface ListedLaunchProps {
  launch: Launch;
  unsuccessful?: boolean;
  undecided?: boolean;
}

class ListedLaunch extends React.Component<ListedLaunchProps> {
  render() {
    const { launch, unsuccessful, undecided } = this.props;
    const classNames: ClassArray = classnames('launch-container', {
      unsuccessful: unsuccessful,
      undecided: undecided,
    });

    return (
      <div className={classNames}>
        {unsuccessful ? (
          <div className="unsuccessful-container">
            <div className="unsuccessful">Unsuccessful launch</div>
          </div>
        ) : null}
        {undecided ? (
          <div className="undecided-container">
            <div className="undecided">To be decided</div>
          </div>
        ) : null}
        <div className="launch-header">
            <h2>{launch.mission_name}</h2>
          <div className="relative-time">{moment(launch.launch_date_utc).fromNow()}</div>
        </div>
        <div className="launch-sub-header">
          <small />
        </div>
        <div className="launch-details">
          <div className="launch-detail">
            <div className="launch-detail-key">Rocket</div>
            <div className="launch-detail-value">
              {launch.launch_site.site_name_long}
            </div>
          </div>
          <div className="launch-detail">
            <div className="launch-detail-key">Launch Site</div>
            <div className="launch-detail-value">
              {launch.rocket.rocket_name}
            </div>
          </div>
          <div className="launch-detail">
            <div className="launch-detail-key">Launch Date</div>
            <div className="launch-detail-value">
              <div>{moment(launch.launch_date_utc).format('L')}</div>
              <div>{moment(launch.launch_date_utc).format('HH:mm')}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListedLaunch;
