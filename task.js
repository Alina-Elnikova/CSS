const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

//const notes = ['когда-нибудь понять JS', 'не беситься']

const notes = [
]

function render() {
    listElement.innerHTML = ''
    if (notes.length == 0) {
        listElement.innerHTML = '<p>Видимо, заняться нечем?</p>'
    }
    for (let i = 0; i<notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTempLate(notes[i], i)) 
    }

    /*for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTempLate(note))

    }*/
}

    //listElement.insertAdjacentHTML('beforeend', getNoteTempLate(notes[0]))
    //listElement.insertAdjacentHTML('beforeend', getNoteTempLate(notes[1])) 
    //listElement.insertAdjacentHTML('beforeend', getNoteTempLate(note))
    //}

render()

createBtn.onclick = function () {
    if (inputElement.value.length == 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type == 'toggle') {
            notes[index].completed = !notes[index].completed
            console.log('toggle', index)
        } else if(type == 'remove') {
            console.log('remove', index)

        notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTempLate(note, index) {
    return `
    <li class='btn btn-outline-info w-100 mb-2 list-group-iten d-flex justify-content-between
    algin-items-center'
        class='list-group-iten d-flex justify-content-between
        algin-items-center'>
            
        <span class = '${note.completed ? 'text-decoration-line-through' : ''}'>${note.title}</span>
        <span>
            <span class='btn btn-small btn-${note.completed ? 'warning' : 'succes'}' data-index='${index}' 
            data-type='toggle'>&check;</span>
            <span class='btn btn-small btn-danger' data-index='${index}' data-type='remove'>&times;</span>            
    </li>
    `
}











