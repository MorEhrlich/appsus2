import { noteService } from "../services/noteService.js";

export class NotePreview extends React.Component {

    state = {
        bgc: 'white'
    }

    render() {
        const note = { ...this.props.note }
        return <div className="note-preview" style={{ backgroundColor: note.backgroundColor }}>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
            {note.picture && <img src={note.picture} />}
            <div>
                <button onClick={() => {
                    onRemove(note.id)
                }}
                >Remove</button>
            </div>
        </div>
    }

}