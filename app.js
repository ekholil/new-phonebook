function $(name){
    return document.getElementById(name)
}
const loadContacts = () => {
    const contact = getContact()
    for(const item of contact){
        const {name, email, number, address} = item;
        displayContact(name, email, number, address)
    }
}
const save = () => {
    const nameField = $('name')
    const emailField = $('email')
    const numberField = $('number')
    const addressField = $('address')
    const name = nameField.value;
    const email = emailField.value;
    const number = numberField.value;
    const address = addressField.value
   

    displayContact(name, email, number, address)
    addItem(name, email, number, address)
    
    nameField.value = ''
    emailField.value = ''
    numberField.value = ''
    addressField.value = ''
}

const displayContact = (name, email, number, address) => {
    const table = $('table')
    const tr = document.createElement('tr')
    tr.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${number}</td>
            <td>${address}</td>
              
    `
    table.appendChild(tr)
}

const getContact = () => {
    const contact = localStorage.getItem('contact')
    let contacts;
    if(contact){
        contacts = JSON.parse(contact)
    } else {
        contacts = []
    }
    return contacts
}

// add item to the localstorage
const contact = getContact()
const addItem = (name, email, number, address) => {
    
    const contacts = {name, email, number, address}
    contact.push(contacts)
    localStorage.setItem('contact', JSON.stringify(contact))
}
loadContacts()

// delete all contacts
const deleteAll = () => {
    const table = $('table')
    table.innerHTML = ''
    localStorage.removeItem('contact')
}
