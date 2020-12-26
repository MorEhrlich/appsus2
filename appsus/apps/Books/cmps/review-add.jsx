import { bookService } from "../services/book-service.js";

export class ReviewAdd extends React.Component {

    state = {
        review: {
            fullname: '',
            rate: 0,
            readDate: '',
            reviewTxt: ''
        }
    }

    onAddReview = () => {
        bookService.addReview(this.props.bookId, this.state.review);
        //show updated reviews list
    }

    onInputChange = (ev) => {

        const value = ev.target.value;
        console.log( 'input ... change ', ev.target );
        console.log( 'input ... change value ', ev.target.value );

        const reviewCopy = { ...this.state.review};
        reviewCopy[ev.target.name] = value;

        console.log( 'review copy object...', reviewCopy );

        this.setState({
            review: reviewCopy
        })

    }

    render() {
        return <section className="review-add">
            <form onSubmit={this.onAddReview}>
                <label htmlFor="fullname">Full name:</label>
                <input value={this.state.review.fullname} id="fullname" type="text" name="fullname"
                onChange={this.onInputChange} />
                <label htmlFor="rate">Rate a book:</label>
                <select value={this.state.review.rate} id="rate" name="rate" onChange={this.onInputChange}>
                    <option value="1">❤️🤍🤍🤍🤍</option>
                    <option value="2">❤️❤️🤍🤍🤍</option>
                    <option value="3">❤️❤️❤️🤍🤍</option>
                    <option value="4">❤️❤️❤️❤️🤍</option>
                    <option value="5">❤️❤️❤️❤️❤️</option>
                </select>
                <label htmlFor="readAt">Read at:</label>
                <input value={this.state.review.readDate} type="date" id="readAt" name="readDate" onChange={this.onInputChange}/>
                <textarea value={this.state.review.reviewTxt} name="reviewTxt" rows="10" cols="30" onChange={this.onInputChange}>
                    Your review text here...
                </textarea>
                <button>Save review...</button>
                
            </form>

        </section>
    }

}