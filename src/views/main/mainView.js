import {AbstractView} from '../../common/AbstractView';
import onChange from 'on-change';
import {HeaderComponent} from '../../components/header/headerComponent';

export class MainView extends AbstractView{
    constructor(appState) {
        super();
        this.appState = appState;
        this.setTitle('Поиск книг');
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
    }
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    appStateHook(path){
        if(path === 'favorites'){
            console.log(this.appState.favorites.length);
        }
    }
    render() {
        this.app.innerHTML = '';
        const div = document.createElement('div');
        this.app.append(div);
        this.renderHeader()
    }
    renderHeader() {
        const header = new HeaderComponent(this.appState).render();
        this.app.prepend(header);
    }
}