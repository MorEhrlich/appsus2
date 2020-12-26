
const { Link } = ReactRouterDOM;


export function EmailPreview({ email, removeEmail, toggleStarEmail, toggleReadEmail }) {

    return <article  className={`email-preview ${email.isRead ? "read" : ""}`}>
        <Link className="single-email" to={`/mail/${email.id}`} onClick={() => {
                toggleReadEmail(email.id) }} >
            <h3 className="single-email-from">{email.from}</h3>
            <h4 className="single-email-title">{email.title}</h4>
            <div  className="single-email-body">{email.body}</div>
        </Link>
        <div className="icon-con">
            <button className="star-button" >
                <img className="star-button-img" onClick={() => { toggleStarEmail(email.id) }} 
                src={email.isStar ? '/apps/Mail/assets/img/yellow-star.png' : '/apps/Mail/assets/img/grey-empty-star.png'}  />
            </button>
            <button className="remove-mail-btn" onClick={() => {
                removeEmail(email.id)
            }}
            ><img className="remove-mail-btn-img" src={"apps/Mail/assets/img/trash-icon.png"} /></button>
        </div>

    </article>

}

