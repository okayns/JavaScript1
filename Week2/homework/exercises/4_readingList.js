'use strict'

const bookList = [{
        title: 'Cin Ali',
        author: 'Rasim Kaygusuz',
        alreadyRead: true,
    },
    {
        title: 'Les Miserables',
        author: 'Victor Hugo',
        alreadyRead: true,
    },
    {
        title: 'Origin',
        author: 'Dan Brown',
        alreadyRead: false,
    }
]

for (let book of bookList) { // 'for...of' is an usage of 'for' loops in Arrays. 
    console.log(`${book.title} by ${book.author}`);
    if (book.alreadyRead) {
        console.log(`You already read "${book.title}"`);
    } else {
        console.log(`You still need to read "${book.title}"`);
    }
    console.log(''); // making space after every object. to make it more readable
}