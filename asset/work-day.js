var todayDate = moment().format('dddd,MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // every thing store in the html doc that matchs the id of description will have a value of the textarea
        var info = $(this).siblings(".description").val();

        // save the time to local storage and declare it here
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, info);
    })

    function timeTracker() {
        // getting current number of hours 
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var hourTime = parseInt($(this).attr("id").split("hour")[1]);

            // removing any of the old classes from the element and adding new class if it less than time
            if (hourTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (hourTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }

        })
    }
    // get items to stay when restarting the page.
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
    $("#hour-7pm .description").val(localStorage.getItem("hour-7pm"));
    $("#hour-8pm .description").val(localStorage.getItem("hour-8pm"));
})