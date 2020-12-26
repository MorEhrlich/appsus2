import { NotePreview } from '../cmps/NotePreview.jsx'

export function NotesList(props) {

    return (
        <section className="notes-list">
            {props.notes.map(note => {
                return <NotePreview key={note.id} note={note} />;
            })}
        </section>
    );
}