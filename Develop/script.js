// locating elements within the DOM
var times = document.getElementById("container").children;
var dateEl = document.getElementById("currentDay");
// displays the current date at the top of the page
dateEl.innerText = moment().format("MMMM Do, YYYY");

// when the save button is clicked, the inner text is saved to local storage
function saveContent(el) {
  var textInput = el.previousElementSibling.value;
  localStorage.setItem(el.parentElement.dataset.time, textInput);
}

// when the delete button is clicked, the corresponding local storage key pair is removed and the page is refreshed
function deleteContent(el) {
  localStorage.removeItem(el.parentElement.dataset.time);
  location.reload();
}

// the calendar is populated with text from local storage and classes are applied to identify past present and future
function fillPage() {
  for (i = 0; i < times.length; i++) {
    text = localStorage.getItem(times[i].dataset.time);
    textArea = times[i].querySelector("textarea");
    textArea.value = text;

    if (moment().hour() > times[i].dataset.time) {
      textArea.classList.add("past");
    } else if (moment().hour() == times[i].dataset.time) {
      textArea.classList.add("present");
    } else {
      textArea.classList.add("future");
    }
  }
}

// clears all content from local storage and reloads the page
function clearSchedule() {
  localStorage.clear();
  location.reload();
}

fillPage();
