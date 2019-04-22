import { observable, computed, action } from 'mobx';
import l from '../../../logic/Logger';

class SearchState {
  @observable searchInput: string = '';

  @computed get hasSearchInput() {
    return this.searchInput && this.searchInput !== '';
  }

  @action setSearchInput = (input: string): void => {
    l.log(input);
    this.searchInput = input;
  }

  @action clear = (): void => {
    this.searchInput = '';
  }
}

const searchState = new SearchState();
export default searchState;
