import { PEOPLE, STARSHIPS } from '../constant';

export const setWinner = ({role, results}) => {
  const Mapper = {
    [PEOPLE]: 'mass',
    [STARSHIPS]: 'crew'
  };
  const key = Mapper[role];
  const winner = results.reduce((acc,curr) => {
    const accValue = +acc[key];
    const currValue = +curr[key];

    if (isNaN(currValue)) {
      return acc;
    }
    if(isNaN(accValue)){
      return curr;
    }
    return currValue > accValue ? curr : acc;
  });


  if (winner){
    winner.isWinner = true;
  }
}
