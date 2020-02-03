import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | player', function(hooks) {
  setupRenderingTest(hooks);

  test('should renders properly render player component', async function(assert) {
    const h3HeadingText = "test h3 heading text";
    const description = "test description";

    await render(hbs`
      <Player @playerName="test h3 heading text">
        test description
      </Player>
    `);

    assert.equal(this.element.querySelector('h3').textContent.trim(), h3HeadingText);
    assert.equal(this.element.querySelector('p').textContent.trim(), description);
  });

  test('h3 heading should contain "badge-success" class', async function(assert) {
    const h3HeadingText = "test h3 heading text";

    this.set('playerName', h3HeadingText);

    await render(hbs`
      <Player @isWinner=true />
    `);

    assert.equal(this.element.querySelector('h3').classList.contains("badge-success"), true);
  });

  test('h3 heading should not contain "badge-success" class', async function(assert) {
    const h3HeadingText = "test h3 heading text";

    this.set('playerName', h3HeadingText);

    await render(hbs`
      <Player />
    `);

    assert.equal(this.element.querySelector('h3').classList.contains("badge-success"), false);
  });
});
