var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

    let h1= document.getElementById("h1");
    h1.style.cssText = " text-decoration:underline; color:Grey; text-align:center; font-size:50px ";

    function displayBooks(library) {
        var booklist = document.getElementById("booklist");
        booklist.innerHTML = "";
        booklist.style.display = "grid";
        booklist.style.gridTemplateColumns = "repeat(3, 1fr)";
        booklist.style.gap = "30px";
        
        for (var i = 0; i < library.length; i++) {
          var book = library[i];
          var bookHTML = `
            <div style="background-color: #f7f7f7; padding: 20px; border: 1px solid #ddd; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
              <p><strong>${i + 1}. ${book.title}</strong></p>
              <p><strong>Author:</strong> ${book.author}</p>
              <p><strong>Reading Status:</strong> ${book.readingStatus? "Already read" : "Not read yet"}</p>
            </div>
          `;
          booklist.innerHTML += bookHTML;
        }
      }
      
      displayBooks(library);