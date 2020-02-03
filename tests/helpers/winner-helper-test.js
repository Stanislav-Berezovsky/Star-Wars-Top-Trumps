import { setWinner } from '../../helpers/winner-helper';
import { module, test } from 'qunit';

module('Unit | Helper | winner-hepler', function() {
  [{
    role: 'straships',
    data: [{"crew":"5400"},{"crew":"1"},{"crew":"1"},{"crew":"9"},{"crew":"1"},{"crew":"8"},{"crew":"1"},{"crew":"5"},{"crew":"unknown"},{"crew":"1"}],
    expectedResult: {"crew":"5400","isWinner": true}
  },
  {
    role: 'people',
    data: [{"mass":"84"},{"mass":"unknown"},{"mass":"112"},{"mass":"80"},{"mass":"74"},{"mass":"1,358"},{"mass":"77"},{"mass":"110"},{"mass":"17"},{"mass":"75"}],
    expectedResult: {"mass":"112", "isWinner": true}
  }].forEach(({role, data, expectedResult}, index) => {
    test(`should properly set winner, test № ${index}`, async function(assert) {
      setWinner({role, results: data});
      const result = data.filter(item => item.isWinner)[0];
      assert.deepEqual(result, expectedResult);
    });
  });
});
