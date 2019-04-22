import { observable, computed, action } from 'mobx';
import Launch from '../../../domain/Launch';
import l from '../../../logic/Logger';
import searchState from '../../components/Search/Search.state';
import launchService from '../../../domain/Launch.service';

class PreviousLaunchesState {
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

  @computed get hasFiltered(): boolean{
    return this.count !== this.countFiltered;
  }

  @computed get successful(): Launch[]{
    return this.launches.filter(launch => launch.launch_success)
  }

  @computed get countSuccessful(): number{
    return this.successful.length
  }

  @computed get unsuccessful(): Launch[]{
    return this.launches.filter(launch => !launch.launch_success)
  }

  @computed get countUnsuccessful(): number{
    return this.unsuccessful.length
  }

  @action load = async (): Promise<void> => {
    try {
      this.launches = await launchService.fetchPrevious();
    } catch (error) {
      l.error(error);
    }
  };
}

const previousLaunchesState = new PreviousLaunchesState();
export default previousLaunchesState;
