import {get} from 'truefit-react-utils';
import {PGH_BUS_API_KEY} from '../../shared/constants';

export async function getBusses() {
  const routes = await get(`http://truetime.portauthority.org/bustime/api/v3/getroutes?key=${PGH_BUS_API_KEY}&format=json`);
  console.log(routes.data);

  return {
    type: 'bob',
  };
}
