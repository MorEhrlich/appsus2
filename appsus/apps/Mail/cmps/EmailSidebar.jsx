
const { Link } = ReactRouterDOM;

export class EmailSidebar extends React.Component {

   
    compose = () => {
        this.props.history.push('/mail/compose')
     
    }

    render () {
     
        return (
            <section className="email-sidebar">
            <button className="compose-btn" onClick={this.compose}> + Compose</button>
            <div>
                <ul className="side-nav-bar">
                 <li><Link className="link-inbox link" to={"/mail?filter=all" }>Inbox</Link></li> 
                    <li><Link className="link-starred link"  to={"/mail?filter=starred"} >Starred</Link></li>
                    <li><Link className="link-sent link" to={"/mail?filter=sent"}>Sent</Link></li>
                    {/* <li><Link className="link-trash link"  to={"/mail?filter=trash"}>Trash</Link></li> */}
                </ul>
            </div>
            </section>
        )

    }
}



