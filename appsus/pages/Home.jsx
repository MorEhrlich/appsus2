import { eventBusService } from "../services/eventBusService.js";

export class Home extends React.Component {
    state = {
        headerStyle: {
           color: "rgb(15, 78, 94)"  ,
            fontSize: 30
        }
    }
    // Getter function:
    get fontSize() {
        return this.state.headerStyle.fontSize + 'px'
    }
    componentDidMount() {}
    foo = ()=>{
        console.log('THIS', this);
        eventBusService.emit('showMsg', `I'm listening`)
    }

    render() {
        // Destructering
        // const color = this.state.headerStyle.color;
        const {color} = this.state.headerStyle;
        return (
            <section>
                <h2 style={{color:color, fontSize: this.fontSize}} className="home-welcome-logo">
                    Welcome to Appsus! 
                </h2>
            </section>
        )
    }
}