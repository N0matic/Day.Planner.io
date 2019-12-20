// Starts the page

var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".event-recorder");

currentDayEl.text(moment().format('LLLL'));

var update = function () {
    currentDayEl.text(moment().format('LLLL'));

    // var currentTime = moment().hour();
    var currentTime = 13;

    textBoxEl.each(function (index, element) {
        element = $(element);
        if (currentTime > element.attr("data-time")) {
            element.addClass("past").removeClass("future");
        } else if (currentTime == element.attr("data-time")) {
            element.addClass("present").removeClass("future");
        }
    });
}

// Updates every second
setInterval(update, 1000);

// Save Button Functions
var saveBtnEl = $(".saveBtn");

// Checking Functionality 
$("button").on("click", function (event) {
    alert("Button Clicked!");
    event.preventDefault();
    var input = $("event-recorder").val();
    console.log(input);
    localStorage.setItem("event-recorder", JSON.stringify(event - recorder));

    saveBtn.on("click", function (event) {
        event.preventDefault();
        var savedInfo = $(this).attr("data-time");
        //console log click on THIS specific button in this class
        console.log(savedInfo);
        //descriptionTarget locates the specific description element that user filled in text with.
        var descriptionTarget = $(".event-recorder");
        console.log(descriptionTarget);
        //we log to ensure we're grabbing the user input.
        console.log(descriptionTarget.val());

        localStorage.setItem(descriptionTarget.attr("id"), JSON.stringify(descriptionTarget.val()));
    });
});


$("#d9").text(localStorage.getItem("#d9"));
$("#d10").text(localStorage.getItem("#d10"));
$("#d11").text(localStorage.getItem("#d11"));
$("#d12").text(localStorage.getItem("#d12"));
$("#d13").text(localStorage.getItem("#d13"));
$("#d14").text(localStorage.getItem("#d14"));
$("#d15").text(localStorage.getItem("#d15"));
$("#d16").text(localStorage.getItem("#d16"));
$("#d17").text(localStorage.getItem("#d17"));

//clears local storage.
$("#clearBtn").on("click", function () {
    localStorage.clear();
    $(".event-recorder").text("");
});
