showNotes();
let addBtn = $("#addBtn");

addBtn.click(function (e) {
    let addTxt = document.getElementById("floatingTextarea");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    // console.log(addTxt.value);
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    notes = localStorage.getItem("notes");
    addTxt.value = "";
    // console.log(notes);
    showNotes();
})


function deleteNote(index) {
    // console.log("you have requested to delete note number ", index + 1);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }


    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
        
        <div class="card col-lg-3 my-2 mx-2 card-note" >
            
        <div class="card-body">
          <h5 class="card-title">note ${index + 1}</h5>
          <p >${element}</p>
          <button id="${index}" onclick="deleteNote(${index})"class="btn btn-primary c-btn">delete</button>
        </div>
      </div>
       `;


    });
    let notesElem = document.getElementById("notes")
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = "You dont have any notes..please add a note.."
    }


    // searching
    let searchTxt = document.getElementById("searchTxt");
    searchTxt.addEventListener("input", function () {
        let inputVal = searchTxt.value;
        // console.log(inputVal);
        let noteCards = document.getElementsByClassName("card-note");
        let e_count = 0;
        let noResults = document.getElementById("no-results")
        Array.from(noteCards).forEach(function (element) {

            let cardTxt = element.getElementsByTagName("p")[0].innerText;

            if (cardTxt.includes(inputVal)) {
                element.style.display = "block";
                noResults.style.display = "none";
                // console.log(cardTxt)
            }
            else {
                element.style.display = "none";
                e_count += 1;
                if (e_count == noteCards.length) {
                   noResults.style.display = "block";
                }
                else
                {
                    noResults.style.display = "none";
                }
            }
        })

    })

}

let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",function(){
    let inputVal = searchTxt.value;
        // console.log(inputVal);
        let noteCards = document.getElementsByClassName("card-note");
        let e_count = 0;
        let noResults = document.getElementById("no-results")
        Array.from(noteCards).forEach(function (element) {

            let cardTxt = element.getElementsByTagName("p")[0].innerText;

            if (cardTxt.includes(inputVal)) {
                element.style.display = "block";
                noResults.style.display = "none";
                // console.log(cardTxt)
            }
            else {
                element.style.display = "none";
                e_count += 1;
                if (e_count == noteCards.length) {
                   noResults.style.display = "block";
                }
                else
                {
                    noResults.style.display = "none";
                }
            }
        })
})
