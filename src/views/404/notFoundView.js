import {AbstractView} from '../../common/AbstractView';

export class NotFoundView extends AbstractView {
    constructor() {
        super();
        this.setTitle('Page Not Found');
    }

    render() {
        this.app.innerHTML = '';
        const div = document.createElement('div');
        div.innerHTML = '<h1>Page not found</h1>';
        this.app.append(div);
    }
}