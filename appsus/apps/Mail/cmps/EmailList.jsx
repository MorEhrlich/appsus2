
import { EmailPreview } from "./EmailPreview.jsx";

export function EmailList({ emails, removeEmail , toggleStarEmail, toggleReadEmail}) {

    return (
        <section className="email-list">
            {emails.map(email => {
                return <EmailPreview  key={email.id} email={email} toggleReadEmail={toggleReadEmail} toggleStarEmail={toggleStarEmail}  removeEmail={removeEmail} />;
            })
            }
        </section>
    );
}
