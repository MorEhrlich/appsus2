import {bookService} from '../services/book-service.js'
import {BookList} from '../cmps/book-list.jsx'
import {BookFilter} from '../cmps/book-filter.jsx'
import {BookAdd} from '../cmps/BookAdd.jsx'

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy : null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        const books = bookService.query()
        this.setState({books})
    }

    onSetFilter = (filterBy) => {
        console.log('filterBy : ', filterBy);
        this.setState({filterBy})
    }

    getBooksForDisplay = () => {
        const {filterBy} = this.state;

        if (!filterBy)
            return this.state.books;

        return this.state.books.filter(book => {
            return book.title.toLowerCase().includes(filterBy.title.toLowerCase());
        })
    }

    render() {
        
        return <section>
            
            <BookAdd/>
            <BookFilter setFilter={this.onSetFilter} />
            {this.state.books.length > 0 && <BookList books={this.getBooksForDisplay()}/>}

        </section>
    }

}