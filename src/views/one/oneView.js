import {AbstractView} from '../../common/AbstractView';

export class OneView extends AbstractView{
    constructor() {
        super();
        this.setTitle('one view');
    }
    render() {
        this.app.innerHTML = '';
        const div = document.createElement('div');
        div.innerHTML = 'one';
        this.app.append(div);
    }
}