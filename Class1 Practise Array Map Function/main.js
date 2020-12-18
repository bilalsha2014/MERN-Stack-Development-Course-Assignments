let books=[{
title:"Smarter Way to learn Javascript",
bookID:1,
Author:"Mark Myers",
PublicationDate:"24JAN2018"
},
{
    title:"Remote Sensing",
    bookID:2,
    Author:"Robert",
    PublicationDate:"4Feb2017"
},
{
    title:"Geographic Information System",
    bookID:3,
    Author:"Edward",
    PublicationDate:"21April2015"
}];

books.map((item)=>console.log(item.Author))

// for (i = 0; i < books.length; i++) {
//     Title = books[i].title
//     BookID = books[i].bookID
//     Author = books[i].Author
//     PublicationDate = books[i].PublicationDate
//     Result="BookID: "+BookID+" Title:"+Title+" Author: "+Author +" Publication Date: "+PublicationDate
//     console.log(Result)
//   }


// for in loop
// for (let item in books){
//     console.log(books[item])
// }



// Destructing Method to Destructure an object

// var book={
//     title:"Geographic Information System",
//     bookID:3,
//     Author:"Edward",
//     PublicationDate:"21April2015"
// };
// let {title,bookID,Author,PublicationDate}=book
// console.log(title)
// console.log(bookID)
// console.log(Author)
// console.log(PublicationDate)

