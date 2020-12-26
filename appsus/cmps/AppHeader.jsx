import { eventBusService } from "../services/eventBusService.js";



const { NavLink, withRouter } = ReactRouterDOM;



class _AppHeader extends React.Component {

    state = {
        msg : ''
    }

    componentDidMount() {
        this.unsubscribe = eventBusService.on('showMsg', (msg) => {
            this.setState({ msg });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    goToAbout = () => {
        this.props.history.push('/about');
    }        

    render() {
        return <header className="app-header">
          
            <div className="logo-header">  <span> <img className="logo-img" src={"../assets/img/white-horse-logo.png"}/></span>  Appsus</div>
            <nav className="nav-bar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/book">Book</NavLink></li>
                    <li><NavLink exact to="/mail">Mail</NavLink></li>
                    <li><NavLink exact to="/keep">Keep</NavLink></li>
                    {/* <li><NavLink exact to="/about">About</NavLink></li> */}
                </ul>
            </nav>
          
        </header>
    }
}

export const AppHeader = withRouter(_AppHeader);