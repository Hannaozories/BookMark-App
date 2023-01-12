var siteName= document.getElementById('siteName')
var siteUrl= document.getElementById('siteUrl')
var myForm= document.getElementById('my-form')
var bookmarksDisplay= document.getElementById('bookmarkDisplay')
var bookMarks=[];

if(localStorage.getItem('Bookmarks') !=null){

    bookMarks= JSON.parse(localStorage.getItem('Bookmarks'))
    displaybookMarks()

}

myForm.addEventListener('submit', function(e){
    // alert('hello')


    e.preventDefault()
    saveBookmarks()
   
});

function saveBookmarks(){

    var bookmark = {
        name:siteName.value,
        url:siteUrl.value,
    }

    bookMarks.push(bookmark)

    localStorage.setItem('Bookmarks', JSON.stringify(bookMarks))

    
    displaybookMarks()
}

function displaybookMarks(){

    var http='https://';

    var temp=``;
    for(var i=0; i<bookMarks.length;i++){

        temp +=` <div class="bg-light mb-4 p-3"><h2 class="text-capitalize">${bookMarks[i].name}</h2> 
        <a class="btn btn-primary" target="_blank" href="${http+bookMarks[i].url}">Visit</a>
        <a onclick="deleteBookmarks(${i})"  class="btn btn-warning"  href="#">Delete</a> </div>`

    }

    bookmarksDisplay.innerHTML=temp;
}

function deleteBookmarks(deletedIndex){

    bookMarks.splice(deletedIndex,1)
    localStorage.setItem('Bookmarks', JSON.stringify(bookMarks))

    displaybookMarks()

}





