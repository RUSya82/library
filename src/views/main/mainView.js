import {AbstractView} from '../../common/AbstractView';
import onChange from 'on-change';
import {HeaderComponent} from '../../components/header/headerComponent';
import {Search} from '../../components/search/searchComponent';
import {CardListComponent} from '../../components/cardList/cardListComponent';

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
        numFound: 0,
    };
    destroy() {
        onChange.unsubscribe(this.appState);
        onChange.unsubscribe(this.state);
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }
    }

    async stateHook(path) {
        if (path === 'searchQuery') {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            this.state.numFound = data.numFound;
            this.state.list = data.docs;
            console.log(data.docs);
        }
        if(path === 'loading' || path === 'list'){
            console.log(this.state.loading);
            this.render();
        }
    }

    async loadList(q, offset) {
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return res.json();
    }

    render() {
        this.app.innerHTML = '';
        const main = document.createElement('div');
        main.innerHTML = `
			<h1>Найдено книг – ${this.state.numFound}</h1>
		`
        main.append(new Search(this.state).render());
        main.append(new CardListComponent(this.appState, this.state).render());

        this.app.append(main);
        this.renderHeader();
    }

    renderHeader() {
        const header = new HeaderComponent(this.appState).render();
        this.app.prepend(header);
    }
}