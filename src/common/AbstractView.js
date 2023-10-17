export class AbstractView{
    appState = {}
    constructor(appState) {
        this.appState = appState;
        this.app = document.getElementById('root');
    }
    render(){
        return;
    }
    destroy(){
        return;
    }
    setTitle(title){
        document.title = title;
    }
}