import { observable, computed, action } from 'mobx';
import Launch from '../../../domain/Launch';
import l from '../../../logic/Logger';
import searchState from '../../components/Search/Search.state';
import launchService from '../../../domain/Launch.service';

class UpcomingLaunchesState {
  @observable launches: Launch[] = [];

  @computed get filteredLaunches(): Launch[] {
    return searchState.hasSearchInput
      ? this.launches.filter(launch =>
          launchService.filter(launch, searchState.searchInput)
        )
      : this.launches;
  }

  @computed get count(): number {
    return this.launches.length;
  }

  @computed get countFiltered(): number {
    return this.filteredLaunches.length;
  }

  @computed get hasFiltered(): boolean {
    return this.count !== this.countFiltered;
  }

  @action load = async (): Promise<void> => {
    try {
      this.launches = await launchService.fetchUpcoming();
    } catch (error) {
      l.error(error);
    }
  };
}

const upcomingLaunchesState = new UpcomingLaunchesState();
export default upcomingLaunchesState;
