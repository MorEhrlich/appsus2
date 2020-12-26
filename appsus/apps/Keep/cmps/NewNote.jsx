import {noteService} from '../services/noteService.js'

export class NewNote extends React.Component {

    state = {
        note: {
            title: '',
            text: '',
            picture: null,
            backgroundColor: 'pink' }
    }

    componentDidMount() {
        const note = { ...this.state.note}
        this.setState({note})
    }

    onInputChange = (ev) => {
        const note = { ...this.state.note}
        
        if (ev.target.type === 'file') {
            note.picture = URL.createObjectURL(ev.target.files[0]);
        } else {
            note[ev.target.name] = ev.target.value
        }
        this.setState({note})
    }

    onSaveNote = (ev) => {
        ev.preventDefault()

        noteService.save(this.state.note)
        .then(savedNote => {
            console.log('Saved succesfully', savedNote);
            this.props.addNote(savedNote)
            this.setState({savedNote})
        })

    }

    render() {

        const backgroundColor = this.state.note.backgroundColor
        
        return (
            <div className="new-note" style={{backgroundColor:backgroundColor}}>
                <form onSubmit={this.onSaveNote}>
                    <input value={this.state.note.title} type="text"
                        name="title" onChange={this.onInputChange} />
                    <input value={this.state.note.text} type="text"
                        name="text" onChange={this.onInputChange} />
                    <input type="file" name="picture" 
                        accept="image/png, image/jpeg" onChange={this.onInputChange}/>
                    <button type="submit">{(this.state.note.id)? 'Update' : 'Add'}</button>  
                </form>
                <img src={this.state.note.picture} />
                <input className="note-color" type="color" name="backgroundColor" 
                value={this.state.note.backgroundColor} onChange={this.onInputChange}/>
            </div>
        )
    }

}