import Component from '@glimmer/component';
import { action, set } from "@ember/object";
import {PEOPLE, STARSHIPS} from '../constant';

export default class PlayersConfigurator extends Component {
    constructor(...args) {
        super(...args);
        this.options = [PEOPLE, STARSHIPS];
        this.selectedItem = PEOPLE;
    }

    @action
    onSelectHandler(value) {
        set(this, 'selectedItem', value);
    }
}