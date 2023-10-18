import {MainView} from './views/main/mainView';
import {FavoritesView} from './views/favorites/favorites';
import {NotFoundView} from './views/404/notFoundView';

class App {
    routes = [
        {
            path: '',
            view: MainView,
        },
        {path: '#favorites', view: FavoritesView},

    ];
    appState = {
        favorites: [],
    };

    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    }

    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        let currentRoute = this.routes.find(s => s.path === location.hash);
        let view = null;
        // console.log(currentRoute);
        if (!currentRoute) {
            view = NotFoundView;
        } else {
            view = currentRoute.view;
        }
        this.currentView = new view(this.appState);
        this.currentView.render();
    }
}

new App();