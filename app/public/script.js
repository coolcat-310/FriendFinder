/**
 * Created by juancarlosnavarrete on 4/25/17.
 */



$("#submit").click(function() {
    /***
     * The event listener is called when the submit button is clicked on by the user.
     *
     */
    console.log('I was clicked');
    var answers = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [$('#q1').val().trim(),$('#q2').val().trim(),$('#q3').val().trim(),$('#q4').val().trim(),
            $('#q5').val().trim(),$('#q6').val().trim(),$('#q7').val().trim(),$('#q8').val().trim(),
            $('#q9').val().trim(),$('#q10').val().trim()]
    };
    console.log(answers);

    $.post("api/new", answers, function(data) {
        if(data == true){
            alert("yay! you are officially booked!")
        }
        if(data == false) {
            alert("Sorry, you are on the wait list")
        }

        $('#name').val("");
        $('#photo').val("");
    });



});

