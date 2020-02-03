import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | players-configurator', function(hooks) {
  setupRenderingTest(hooks);
  const PEOPLE = 'people';
  const STARSHIPS = 'starships';

  test('should set up options elements', async function(assert) {
    await render(hbs`<PlayersConfigurator />`);
    const options =  this.element.getElementsByTagName('option');
    assert.equal(options[0].textContent.trim(), PEOPLE);
    assert.equal(options[1].textContent.trim(), STARSHIPS);
    assert.equal(options.length, 2);
  });

  test('should properly set link text', async function(assert) {
    const peopleResult = `Play ${PEOPLE} game`
    await render(hbs`<PlayersConfigurator />`);
    const aElement = this.element.querySelector('a');
    assert.equal(aElement.textContent.trim(), peopleResult);

    const selectElement =  this.element.querySelector('select');
    selectElement.value = STARSHIPS;
    selectElement.dispatchEvent(new Event('change'));
    assert.equal(aElement.textContent.trim(), `Play ${STARSHIPS} game`);

    selectElement.value = PEOPLE;
    selectElement.dispatchEvent(new Event('change'));
    assert.equal(aElement.textContent.trim(), peopleResult);
  });
});
