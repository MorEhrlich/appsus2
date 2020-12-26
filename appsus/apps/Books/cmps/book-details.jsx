import {bookService} from "../services/book-service.js"
import {ReviewAdd} from "../cmps/review-add.jsx"

export class BookDetails extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        console.log('BookDetails...this.props', this.props);
        const {bookId} = this.props.match.params;
        console.log('bookService.getById(bookId)', bookService.getById(bookId));
        bookService.getById(bookId).then(book => {
            this.setState({book})
        })
    }

    getKindOfReading = () => {

        const pageCount = this.state.book.pageCount;

        return (pageCount > 500) ? 'Long reading' :
            pageCount > 200 ? 'Descent reading' :
                pageCount < 100 && 'Light reading';

    }

    getBookAgeCategoryText = () => {
        const yearsFromPublished = new Date().getFullYear() - Number(this.state.book.publishedDate)

        return (yearsFromPublished > 10) ? 'Veteran' : (yearsFromPublished === 0) && 'New'
    }

    isOnSale = () => {
        return this.state.book.listPrice.isOnsale ? 'YES' : 'NO';
    }

    getBookPrice = () => {

        return new Intl.NumberFormat('en',
            { style: 'currency', currency: `${this.state.book.listPrice.currencyCode}` })
            .format(this.state.book.listPrice.amount);
    }

    getBookPriceStyle = () => {

        return (this.state.book.listPrice.amount > 100) ? 'red' : (this.state.book.listPrice.amount < 20) ? 'green' : ''
    }

    render() {

        if (!this.state.book) return <div>Loading..</div>;

        return <section>
            <h2>{this.state.book.title}</h2>
            <img src={this.state.book.thumbnail} />
            <h4>Pages: {this.state.book.pageCount} <span>{this.getKindOfReading()}</span></h4>
            <h4>Published on : {this.state.book.publishedDate}<span>{this.getBookAgeCategoryText()}</span></h4>
            <h4>On sale: <span>{this.isOnSale()}</span></h4>
            <h4 >Price: <span className={this.getBookPriceStyle()}>{this.getBookPrice()}</span></h4>
            <p>{this.state.book.description}</p>
            <ReviewAdd bookId={this.state.book.id}/>
        </section>
    }

}