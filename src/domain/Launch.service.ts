import Launch from './Launch';
import l from '../logic/Logger';
import Axios from 'axios';

class LaunchService {
  filter = (launch: Launch, filterValue: string): boolean => {
    return (
      Object.keys(launch).filter(key => this.includes(launch[key], filterValue))
        .length > 0
    );
  };

  private includes = (key: any, value: string): boolean => {
    switch (typeof key) {
      case 'string':
        l.log(key.toLowerCase(), value, typeof key);
        return key.toLowerCase().includes(value.toLowerCase());

      default:
        return false;
    }
  };

  fetchUpcoming = async (): Promise<Launch[]> => {
    try {
      const response = await Axios.get(`/launches/upcoming`);
      return response.data.map((o: any) => this.transform(o));
    } catch (error) {
      l.error(error);
      throw error;
    }
  };

  fetchPrevious = async (): Promise<Launch[]> => {
    try {
      const response = await Axios.get(`/launches/past`, {
        params: {
          sort: 'flight_number',
          order: 'desc',
        },
      });
      return response.data.map((o: any) => this.transform(o));
    } catch (error) {
      l.error(error);
      throw error;
    }
  };

  private transform = (responseObject: {}): Launch => {
    return Object.assign(new Launch(), { ...responseObject });
  };
}

const launchService = new LaunchService();
export default launchService;
