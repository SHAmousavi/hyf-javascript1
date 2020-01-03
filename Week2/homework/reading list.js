var books = [{titile : "The Hobbit",autor : " J.R.R. Tolkien", alredyRead : true },
{titile : "Harry Potter", autor : " J.K. Rowling", alredyRead : true},
{titile : "Harry Potter2", autor : " J.K. Rowling", alredyRead : false}];
for(i = 0; i < 3 ; i++){
var titile = books[i].titile;
var autorr = books[i].autor;
var alredyReady = books[i].alredyRead;
if(alredyReady == true){
console.log("You alredy reade " + titile + autorr)
}else{
console.log("You still need to read " + titile + autorr)
}
}