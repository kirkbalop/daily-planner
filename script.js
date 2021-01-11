$(document).ready(function(){
$("#currentDay").text(moment().format("MMMM DD, YYYY"));
});

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");
    // json stringify google JSON.stringify localstorage
        localStorage.setItem("text", JSON.stringify(text));
        localStorage.setItem("time", JSON.stringify(time));
    })
});

function timeKeeper() {
    // establish current time with an hourly interval
    var currentTime = moment().hour();

    // loop over blocks
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else if (blockTime > currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        };
    });
};

// JSON parse
// previous attempts to parse result in failure of color-coding
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


setInterval(timeKeeper(), 180000);
