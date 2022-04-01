(function () {
    'use strict';

    function getContacts() {
        fetch("/api/contacts").then(response => {
            return response.json()
        })
            .then(fetchedContacts => {
                contacts = fetchedContacts
                contacts.forEach(contact => {
                    addContactRow(contact)
                })
            })
    }

    const addContactForm = get('addContactForm');
    const contactsTable = get('contactsTable');
    const firstNameInput = get('first');
    const lastNameInput = get('last');
    const emailInput = get('email');
    const phoneInput = get('phone');

    let contacts = [];

    getContacts();

    function get(id) {
        return document.getElementById(id);
    }

    get('addContact').addEventListener('click', () => {
        addContactForm.style.display = 'block';
    })

    addContactForm.addEventListener('submit', event => {
        event.preventDefault();

        if (!contacts.length) {
            contactsTable.deleteRow(1);
        }

        const newContact = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        $.ajax({
            method: 'POST',
            url: '/api/contacts',
            data: newContact
        })

        //contacts.push(newContact);

        addContactRow(newContact);

        /*firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';*/

        //addContactForm.reset();
        //addContactForm.style.display = 'none';
        hideAndResetAddContactForm();
    });

    get('cancel').addEventListener('click', () => {
        hideAndResetAddContactForm();
    });

    function addContactRow(contact) {
        const row = contactsTable.insertRow();
        const firstNameCell = row.insertCell();
        const lastNameCell = row.insertCell();
        const emailCell = row.insertCell();
        const phoneCell = row.insertCell();

        firstNameCell.innerText = contact.firstName;
        lastNameCell.innerText = contact.lastName;
        emailCell.innerText = contact.email;
        phoneCell.innerText = contact.phone;
    }

    function hideAndResetAddContactForm() {
        addContactForm.reset();
        addContactForm.style.display = 'none';
    }
}());