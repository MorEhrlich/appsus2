export class NoteFilter extends React.Component {

    state = {
        filterBy : {
            title: '',
            type: 'text'
        }
    };

    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
        };
        
        const filterBy = {...this.state.filterBy}
        filterBy[ev.target.name] = ev.target.value;

        this.setState({filterBy}, callback);
    };

    render() {
        return <section className="note-filter">
            <input type="text" name="title"
                value={this.state.filterBy.title}
                placeholder="Search by title"
                autoComplete="off"
                onChange={this.handleChange} />
        </section>;
    }

}