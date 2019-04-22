import LaunchSite from './LaunchSite.i';
import Rocket from './Rocket.i';

class Launch {
  customer: string;
  flight_id: string;
  flight_number: number;
  land_success: boolean;
  landing_intent: boolean;
  landing_type: string;
  landing_vehicle: string;
  launch_date_utc: Date;
  launch_site: LaunchSite;
  launch_success: boolean;
  mission_name: string;
  nationality: string;
  payload_id: string;
  payload_type: string;
  rocket: Rocket;
  site_id: string;
  site_name: string;
  tbd: boolean;
}

export default Launch;
