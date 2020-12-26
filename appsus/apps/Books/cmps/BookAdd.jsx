import { bookService } from "../services/book-service.js"

export class BookAdd extends React.Component {

    state = {
        searchText: '',
        books: []
    }

    getBooksForDisplay = () => {

        const {searchText} = this.state;
        if (searchText)  return bookService.getGoogleBooks(searchText)
    }

    onInputSearchTextChange = (ev) => {
        
        const searchText = ev.target.value
        const books = this.getBooksForDisplay(ev.target.value)

        this.setState({
            searchText : ev.target.value,
            books : this.getBooksForDisplay(ev.target.value)
        })

    }

    render() {
        console.log('render...', this.state.books);

        return <section>
            <input value={this.state.searchText} name="searchText" type="text" 
            onChange={this.onInputSearchTextChange}/>
            {this.state.books.length > 0 && <BookNamesList books={this.state.books} />}
        </section>
    }

}

function BookNameLine(props) {
    return <li>{props.bookName}<button>+</button></li>
}

function BookNamesList(props) {

    console.log('BookNamesList...', props);
    return (
        <ul className="search-list">
            {props.books.map(book => {
                return <BookNameLine key={book.id} bookName={boo.title} />;
            })}
        </ul>
    )
}