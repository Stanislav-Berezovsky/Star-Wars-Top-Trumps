import Route from '@ember/routing/route';
import { PEOPLE } from '../constant';
import { setWinner } from '../helpers/winner-helper';

const randomPageNumber = lastPageIndex =>
  Math.floor(Math.random() * Math.floor(lastPageIndex)) + 1;


export default class GameRoute extends Route {
  async model(params) {
    const role = params.game_role;
    const response = await fetch(`https://swapi.co/api/${role}/?page=${randomPageNumber(3)}`);
    let responseData = await response.json();
    let results = (responseData.results || []).slice(0,2);
    setWinner({role, results});

    return {
      role,
      arePeopleRole: role === PEOPLE,
      playersList: results
    };
  }
}
