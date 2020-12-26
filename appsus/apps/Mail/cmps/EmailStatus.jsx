import { emailService } from '../services/emailService.js'


export class EmailStatus extends React.Component {


    state = {
        total: 0,
        isRead: false,
    }


    render() {

        return (
            <section className="email-status-con" >

                <div className="email-counter">
                    <p className="email-counter-item"><strong>Total Emails: </strong><span> {this.props.emailCount}</span></p>
                    <p className="email-counter-item"><strong> Read Emails: </strong><span> {this.props.readCount}</span></p>
                    <p className="email-counter-item"><strong> Unread Emails: </strong><span> {this.props.unreadCount}</span></p>
                </div>

            </section>
        )

    }
}


