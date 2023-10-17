import {DivComponent} from '../../common/div-component';

export class HeaderComponent extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src='/static/logo.svg' alt='Логотип' />
            </div>
        `;
        return this.el;
    }
}