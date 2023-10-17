import {AbstractView} from '../../common/AbstractView';
import onChange from 'on-change';
import {HeaderComponent} from '../../components/header/headerComponent';
import {Search} from '../../components/search/searchComponent';

export class MainView extends AbstractView {
    constructor(appState) {
        super();
        this.appState = appState;
        this.setTitle('Поиск книг');
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
    }

    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };

    appStateHook(path) {
        if (path === 'favorites') {
            console.log(this.appState.favorites.length);
        }
    }

    async stateHook(path) {
        if (path === 'searchQuery') {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            this.state.list = data.docs;
            console.log(data.docs);
        }
    }

    async loadList(q, offset) {
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return res.json();
    }

    render() {
        this.app.innerHTML = '';
        const main = document.createElement('div');
        main.append(new Search(this.state).render());

        this.app.append(main);
        this.renderHeader();
    }

    renderHeader() {
        const header = new HeaderComponent(this.appState).render();
        this.app.prepend(header);
    }
}