export class AbstractView {
    appState = {};

    constructor() {
        this.app = document.getElementById('root');
    }

    render() {
        return;
    }

    destroy() {
        return;
    }

    setTitle(title) {
        document.title = title;
    }
}