// Starts the page

var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".event-recorder");

currentDayEl.text(moment().format('LLLL'));

var update = function () {
    currentDayEl.text(moment().format('LLLL'));

    // var currHour = moment().hour();
    var currHour = 12;

    textBoxEl.each(function (index, element) {
        element = $(element);
        if (currHour > element.attr("data-time")) {
            element.addClass("past").removeClass("future");
        } else if (currHour == element.attr("data-time")) {
            element.addClass("present").removeClass("future");
        }
    });
}

setInterval(update, 1000);

// // Updates every second
// setInterval(update, 1000);


// // Save Button Functions
// var saveBtnEl = $(".saveBtn");

// // Checking Functionality 
// $("button").on("click", function (event) {
//     alert("Button Clicked!");
//     event.preventDefault();
//     var input = $("input").val();
//     console.log(input);
//     localStorage.setItem("input", JSON.stringify(input));
// });
