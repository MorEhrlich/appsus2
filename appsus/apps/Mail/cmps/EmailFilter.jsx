import {EmailStatus} from "./EmailStatus.jsx"

export class EmailFilter extends React.Component {

    state = {
   
    };


    handleChange = (ev) => {
      
        const value = ev.target.value;
        const field = ev.target.name
        this.props.setFilter({ [field]: value });
      
    };


    onFilter = (ev) => {
        this.props.onSetFilter(ev.target.value);
    }

    render() {
        return <section className="email-filter">
            <input className="search-input" type="text" name="title" value={this.props.filterBy.title} placeholder="Search Emails" autoComplete="off"
                onChange={this.handleChange} />
                <div className="filter-con">
                 
                <select className="filter-opt" onChange={this.onFilter}>
                    <option value="all" default >All</option>
                    <option value="read" >Read</option>
                    <option value="unread">Unread</option>
                </select>
                </div>
                <EmailStatus emailCount={this.props.emailCount} readCount={this.props.readCount} unreadCount={this.props.unreadCount} /> 
        </section>;
    }

}



  

