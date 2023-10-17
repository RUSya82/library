import {AbstractView} from '../../common/AbstractView';
import onChange from 'on-change';

export class MainView extends AbstractView{
    constructor(appState) {
        super(appState);
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
        div.innerHTML = `Число книг в избранном: ${this.appState.favorites.length}`;
        this.app.append(div);
        setTimeout(()=>{
            this.appState.favorites.push('d');
        }, 1000)
    }
}