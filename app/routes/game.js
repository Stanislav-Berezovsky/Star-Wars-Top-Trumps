import Route from '@ember/routing/route';

const gerRandomPageNumber = lastPageIndex =>
  Math.floor(Math.random() * Math.floor(lastPageIndex)) + 1;

export default class GameRoute extends Route {

  async model(params) {
    const role = params.game_role;

    const response = await fetch(`https://swapi.co/api/${role}/?page=${gerRandomPageNumber(3)}`);
    let { results } = await response.json();
    console.log(results, role === 'people');

    return {
      role,
      arePeopleRole: role === 'people',
      playersList: results
    };
  }
}
