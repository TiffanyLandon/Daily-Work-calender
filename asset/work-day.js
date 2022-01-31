var todayDate = moment().format('dddd,MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // every thing store in the html doc that matchs the id of description will have a value of the textarea
        var info = $(this).siblings(".description").val();

        // save the time to local storage and declare it here
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, JSON.parseInt(info));
    })

    function timeTracker () {
        var timeNow = moment().hour();
        
    }
    localStorage
})