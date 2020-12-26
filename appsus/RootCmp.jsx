import { AppHeader } from './cmps/AppHeader.jsx';
import { About } from './pages/About.jsx';
import { Home } from './pages/Home.jsx';
import {BookApp} from './apps/Books/pages/book-app.jsx'
import {BookDetails} from './apps/Books/cmps/book-details.jsx'
import {MissKeep} from './apps/Keep/pages/MissKeep.jsx'
import {MailApp} from './apps/Mail/MailApp.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export class RootCmp extends React.Component {

    render() {
        return (
            <Router>
                <section className="main-app">
                    <AppHeader />
                    <Switch>
                        <Route path="/book/:bookId" component={BookDetails} />
                        <Route path="/book" component={BookApp} />
                        <Route path="/keep" exact component={MissKeep} />
                        <Route path="/mail" component={MailApp} />
                        {/* <Route path="/about" component={About} /> */}
                        <Route path="/" component={Home} />
                    </Switch>
                    {/* <footer className="animate__animated animate__jello">coffeerights 2020</footer> */}
                </section>
            </Router>
        );
    }
}
