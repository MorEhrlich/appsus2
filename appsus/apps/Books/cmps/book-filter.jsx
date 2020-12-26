export class BookFilter extends React.Component {

    state = {
        title: '',
        price: 0
    }

    setFilterValue = (ev) => {
        this.setState({title: ev.target.value});
    }

    doFilter = () => {
        this.props.setFilter(this.state)
    }

    render() {
        return <section>
            <input type="text" name="title" value={this.state.title}
            placeholder="filter"
            onChange={this.setFilterValue}/>
            <button onClick={this.doFilter}>Filter</button>
        </section>
    }

}