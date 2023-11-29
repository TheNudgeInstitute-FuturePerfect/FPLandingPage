$(document).ready(function () {
    var targetPosition = 600;
    var slots = '{"Number_Of_Slots":"2","Slot1":"22 Sep, Fri 05:00 PM","1":"3527424000220791740","Slot2":"22 Sep, Fri 08:00PM","2":"3527424000220791770"}';

    // ----------------------------------------------------
    // Dynamically change number of people in UI
    // ----------------------------------------------------
    var onScroll = function () {
        var scrollPosition = $(this).scrollTop();
        // console.log(scrollPosition);
        if (scrollPosition >= targetPosition) {
            console.log("function hit");
            targetPosition += 500;
            let counts = setInterval(updated);
            let upto = 0;
            function updated() {
                $("#SuccessStoriesSlider").carousel(0)
                let count = document.getElementById("counter");
                upto = upto + 50;
                count.innerHTML = upto;
                if (upto === 15000) {
                    clearInterval(counts);
                }
            }
        }
    }
    $(window).on('scroll', onScroll);
});



  