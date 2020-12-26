import { emailService } from '../services/emailService.js'


export class EmailDetails extends React.Component {

    state = {
        email: {
            id: '',
            title: '',
            from: '',
            body: '',
            isStar: false,
            isRead: false,
            isDeleted: false,
            isSent: false,
            sentAt: ''

        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.emailId !== this.props.match.params.emailId) {
            this.loadEmail()
        }
    }

    componentDidMount() {
        this.loadEmail();
    }

    loadEmail() {
        const { emailId } = this.props.match.params;
        var email = emailService.getEmailById(emailId);
        this.setState({ email });
        
    }

    onBack = () => {
        this.props.history.goBack()
    };

    // onRemoveEmail = (emailId) => {
    //     emailService.remove(emailId).then(() => {
    //         this.loadEmails()
    //     })
    // }

  
    render() {
        // const sentAt = utilService.getFormattedDate(this.props.email.sentAt)
        return (
            <section className="email-body">
                <div >
                    <h2>{this.state.email.from}</h2>
                    {/* <p>{sentAt}</p> */}
                </div>
                <hr />
                <h3>{this.state.email.title}</h3>
                <p>{this.state.email.body}</p>
                <button className="back-btn" onClick={this.onBack} >
                    Back
                </button> 
                {/* <button className="delete-btn" onClick={this.onRemoveEmail} >
                   delete
                </button> */}
            
                
            </section>
        )
    }

}








