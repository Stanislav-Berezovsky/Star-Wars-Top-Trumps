import Component from '@glimmer/component';
import { action, set } from "@ember/object";

export default class PlayersConfigurator extends Component {
    constructor(...args) {
        super(...args);
        this.options = ['people', 'starships'];
        this.selectedItem = 'people';
    }

    @action
    onSelectHandler(value) {
        set(this, 'selectedItem', value);
    }
}