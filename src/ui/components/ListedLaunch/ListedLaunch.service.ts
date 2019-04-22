import Launch from "../../../domain/Launch";

class ListedLaunchService{

  getLaunchStatusClassName = (launch: Launch): string => {
    return launch.tbd ? 'to-be-decided' : 'decided';
  }
}

const listedLaunchService = new ListedLaunchService();
export default listedLaunchService;