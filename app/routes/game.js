import Route from '@ember/routing/route';
import { PEOPLE, STARSHIPS } from '../constant'; 

const gerRandomPageNumber = lastPageIndex =>
  Math.floor(Math.random() * Math.floor(lastPageIndex)) + 1;

const setWinner = ({role, results}) => {
  const Mapper = {
    [PEOPLE]: 'mass',
    [STARSHIPS]: 'crew'
  };
  const key = Mapper[role]
  const winner = results.find((item, i, arr) => {
    return  +item[key] === Math.max(...arr.map((el) => +el[key]));
  });
   
  console.log('winner', winner); 
  winner.isWinner = true;
}

export default class GameRoute extends Route {

  async model(params) {
    const role = params.game_role;

    const response = await fetch(`https://swapi.co/api/${role}/?page=${gerRandomPageNumber(3)}`);
    let { results } = await response.json();
    setWinner({role, results});
    console.log('results', results)
    return {
      role,
      arePeopleRole: role === PEOPLE,
      playersList: results
    };
  }
}
