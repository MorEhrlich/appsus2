import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storageService.js';

const KEY = 'notesDB'

export const noteService = {
    save,
    remove,
    getNotes
}

// var gNotes = [
//     {
//         type: "NoteText",
//         isPinned: true,
//         info: {
//             txt: 'Today is Reactive Sprint !'
//         }
//     },
//     {
//         type: "NoteImg",
//         info: {
//             url: '',
//             title: 'Good memories...'
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         type: "NoteTodos",
//         info: {
//             label: 'Planning a new year party',
//             todos: [
//                 { txt : 'To buy presents', doneAt: null },
//                 { txt : 'Cook a cake', doneAt: 19999999}
//             ]
//         }
//     }
// ]

var gNotes = [
    {
        id: utilService.makeId(),
        title: 'Birthday',
        text: 'Buy a present',
        picture: null,
        backgroundColor: 'pink'
    },
    {
        id: utilService.makeId(),
        title: 'Hotel Order',
        text: 'Need to call to confirm a reservation',
        picture: null,
        backgroundColor: 'white'
    },
    {
        id: utilService.makeId(),
        title: 'Shopping list',
        text: 'Eggs, milk, salad, chease, some sweets',
        picture: null,
        backgroundColor: 'lightblue'
    }
]

function remove(noteId) {
    gNotes = gNotes.filter(note => note.id !== noteId);
    _saveNotesToStorage();
    return Promise.resolve();
}

function getNotes() {
    return Promise.resolve(gNotes)
}

function getNotesByType(type){
    return gNotes.filter(note => note.type === type)
}

function getNotesByContent(searchText){
    return gNotes.info.title.includes(searchText)
}

function save(note) {
    if (note.id) {
        return _update(note);
    } else {
        return _add(note);
    }
}

function _add(note) {
    const noteToAdd = {
        id: utilService.makeId(),
        ...note
    };
    gNotes = [noteToAdd, ...gNotes];
    _saveNotesToStorage();
    return Promise.resolve(noteToAdd); 
}

function _update(note) {
    const noteToUpdate = {
        ...note
    };
    const notesCopy = [...gNotes];
    const idx = notesCopy.findIndex(note => note.id === note.id);
    notesCopy[idx] = noteToUpdate;
    gNotes = notesCopy;
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate);
}

function _saveNotesToStorage() {
    storageService.save(KEY, gNotes)
}