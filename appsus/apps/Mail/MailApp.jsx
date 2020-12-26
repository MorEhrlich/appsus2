import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
import { EmailCompose } from './cmps/EmailCompose.jsx'
import { EmailSidebar } from './cmps/EmailSidebar.jsx'
import { emailService } from './services/emailService.js'
import { EmailDetails } from './cmps/EmailDetails.jsx'

const { Route, Switch } = ReactRouterDOM;

export class MailApp extends React.Component {

    state = {
        name: "ME",
        emails: [],
        filterBy: {
            filterType: 'all',
            title: '',
            secondaryFilter: null
        }
    };

    componentDidMount() {
        this.loadEmails();
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        var params = new URLSearchParams(this.props.location.search);
        if (params && params.get("filter") && this.state.filterBy.filterType != params.get("filter")) {
            this.setState({ ...this.state, filterBy: { ...this.state.filterBy, filterType: params.get("filter") } });
            this.loadEmails();
        }
        return false;
    }

    loadEmails = () => {
        emailService.query().then(emails => {
            switch (this.state.filterBy.filterType) {
                case "all":
                    break;
                case "starred":
                    emails = emails.filter(function (email) { return email.isStar; });
                    break;
                // case "trash":
                //     emails = emails.filter(function (email) { return email.isDeleted; });
                //     break;
                case "sent":
                    emails = emails.filter(function (email) { return email.isSent; });
                    break;
            }
            this.setState({ emails });
        });
    }

    onSendEmail = (email) => {
        emailService.sendEmail({ ...email, from: this.state.name }).then((emails) => {
            this.setState({ emails })
            this.props.history.push("/mail")
        });
    }


    toggleStarEmail = (emailId) => {
        emailService.emailStar(emailId).then(() => {
            this.loadEmails()
        })
    }

    onRemoveEmail = (emailId) => {
        emailService.remove(emailId).then(() => {
            this.loadEmails()
        })
    }

    toggleReadEmail = (emailId) => {
        emailService.emailRead(emailId).then(() => {
            this.loadEmails()
        })
    }

    getEmailsForDisplay = () => {
        const txt = this.state.filterBy.title.toLowerCase()
        var emailsFilteredByTitle = this.state.emails.filter(email => {
            return email.title.toLowerCase().includes(txt) ||
                email.from.toLowerCase().includes(txt) ||
                email.body.toLowerCase().includes(txt);
        });

        switch (this.state.filterBy.secondaryFilter) {
            case "read":
                return emailsFilteredByTitle.filter(function (email) { return email.isRead; });
            case "unread":
                return emailsFilteredByTitle.filter(function (email) { return !email.isRead; });
            case "all":
                return emailsFilteredByTitle
            default:
                return emailsFilteredByTitle;

        }
    }


    onSetFilter = (filterBy) => {
        console.log('filterBy:', filterBy);
        this.setState({ ...this.state, filterBy: { ...this.state.filterBy, secondaryFilter: filterBy } });
    }

    onSetFilterTitle = (filterBy) => {
        console.log('filterBy:', filterBy);
        this.setState({ ...this.state, filterBy: { ...this.state.filterBy, title: filterBy.title } });
    }


    onAddNewEmail = (email) => {
        emailService.addEmail(email)
            .then(() => this.loadEmails())
    }


    emailCount = () => {
        return this.state.emails.length;
    }
    readCount = () => {
        let count = this.state.emails.filter(function (email) { return email.isRead; }).length;
        return count;
    }
    unreadCount = () => {
        let count = this.state.emails.filter(function (email) { return !email.isRead; }).length;
        return count;
    }


    render() {

        const emailsForDisplay = this.getEmailsForDisplay();
        return (
            <section className="mail-app">
                <EmailFilter onSetFilter={this.onSetFilter} filterBy={this.state.filterBy} setFilter={this.onSetFilterTitle} emailCount={this.emailCount()} readCount={this.readCount()} unreadCount={this.unreadCount()} />
                <div className="main-container">
                    <EmailSidebar history={this.props.history} />
                    <Switch>
                        <Route path="/mail" exact component={() => <EmailList removeEmail={this.onRemoveEmail} toggleStarEmail={this.toggleStarEmail} toggleReadEmail={this.toggleReadEmail} emails={emailsForDisplay} />} />
                        <Route path="/mail/compose" exact component={() => <EmailCompose sendEmail={this.onSendEmail} />} />
                        <Route path="/mail/:emailId" exact component={EmailDetails} />
                    </Switch>
                </div>
            </section>
        );
    }
}