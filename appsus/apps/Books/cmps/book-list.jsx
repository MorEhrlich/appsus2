import { BookPreview } from '../cmps/book-preview.jsx'

export function BookList(props) {

    return (
        <section className="books-list">
            {props.books.map(book => {
                return <BookPreview key={book.id} book={book} />;
            })}
        </section>
    );
}