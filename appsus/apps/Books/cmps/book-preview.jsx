const { Link } = ReactRouterDOM

export function BookPreview(props) {

    function getPriceText() {
        return new Intl.NumberFormat('en',
            { style: 'currency', currency: `${props.book.listPrice.currencyCode}` })
            .format(props.book.listPrice.amount);
    }

    return <Link to={`/book/${props.book.id}`}>
        <section className="book-preview">
            <h2>{props.book.title}</h2>
            <img src={props.book.thumbnail} />
            <h3>{props.book.authors[0]}</h3>
            <h3>{props.book.publishedDate}</h3>
            <h2>{getPriceText()}</h2>
        </section>
    </Link>
}