import {AbstractView} from '../../common/AbstractView';

export class MainView extends AbstractView{
    constructor() {
        super();
        this.setTitle('Поиск книг');
    }
    render() {
        this.app.innerHTML = '';
        const div = document.createElement('div');
        div.innerHTML = 'Test';
        this.app.append(div);
    }
}