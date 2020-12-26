
import {emailService } from '../services/emailService.js'

export class EmailCompose extends React.Component {

    state = {
        emailDetails: {
            from:'',
            sendTo: '',
            title: '',
            body: ''
        }
    }

  
    onComposing = (ev) => {
        const value = ev.target.value;
        const field = ev.target.name
        const email = { ...this.state.emailDetails, [field]: value }
        this.setState({ emailDetails: email })
    }

    onAddEmail = (ev) => {
        ev.preventDefault();
        this.props.addNewEmail(this.state.emailDetails)
    }

    addNewEmail = () =>{
        emailService.saveEmailsToStorage()
    } 


    onSendEmail  = (ev) =>{
        ev.preventDefault();
        this.props.sendEmail(this.state.emailDetails);
    } 



    render() {
        return (
            <section className="email-compose-con">
                <form  onSubmit={this.onAddEmail}>
                    <div className="email-compose">
                        <input value={this.state.emailDetails.sendTo} onChange={this.onComposing} placeholder='To:' name='sendTo' type="text" />
                        <input value={this.state.emailDetails.title} placeholder='Title:' name='title' onChange={this.onComposing} type="text" />
                        <textarea className="email-body-compose" value={this.state.emailDetails.body} name='body' onChange={this.onComposing} type="text" />
                    </div>
                    <div >
                        <button className="send-btn" type="submit" onClick={this.onSendEmail}>Send</button>
                    </div>
                </form>
            </section>
        )
    }

}


