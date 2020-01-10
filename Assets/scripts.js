// Ready the page on load
$(document).ready(function () {

    // set up some variables for future use
    var currentDayEl = $("#currentDay");
    var saveBtnEl = $(".saveBtn");
    var textBoxEl = $(".event-recorder");

    // Sets current time for the header
    currentDayEl.text(moment().format('LLLL'));

    // function for updating the time
    var update = function () {
        currentDayEl.text(moment().format('LLLL'));

        var currentTime = moment().hour();

        // Each textbox checks the current time to adjust the class of the box from past, present, adn future accordingly
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


    // Save button function starts here
    saveBtnEl.on("click", function (event) {
        // Prevent the page from reverting to default
        event.preventDefault();
        // create the variables for the function
        var button = $(this);
        var btnData = $(this).attr("data-time");
        console.log(btnData);
        var descriptionTarget = $("#description" + btnData);
        console.log(descriptionTarget);
        console.log(descriptionTarget.val());

        // Should save input in local storage
        localStorage.setItem(descriptionTarget.attr("id"), descriptionTarget.val());
    });

    // IN THEORY, saved data would be grabbed for these elements
    $("#description9").text(localStorage.getItem("description9"));
    $("#description10").text(localStorage.getItem("description10"));
    $("#description11").text(localStorage.getItem("description11"));
    $("#description12").text(localStorage.getItem("description12"));
    $("#description13").text(localStorage.getItem("description13"));
    $("#description14").text(localStorage.getItem("description14"));
    $("#description15").text(localStorage.getItem("description15"));
    $("#description16").text(localStorage.getItem("description16"));
    $("#description17").text(localStorage.getItem("description17"));

    // Clears local storage... Pretty simple.
    $("#clearBtn").on("click", function () {
        localStorage.clear();
        $(".event-recorder").text("");
    });
});