#!/usr/bin/node
//Lexical scoping and welcome message
const welcome = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;

    const displayFullName = () => {
        alert(`Welcome ${fullName}!`)
    }
    displayFullName()
}