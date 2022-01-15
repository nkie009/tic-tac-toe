$(document).ready(function () {
    console.log('tic tac toe')

    let sound = $('audio')[0];
    let playerTurn = true;
    let playerX = $('.player-x-score');// here is to select the player X score cell from html
    let playerO = $('.player-o-score');// here is to select the player O score cell from html
    let draw = $('.draw-score');// here is to select the draw score cell from html
    let xScoreUpdated = 0; // X player here is to set the score to update to html
    let oScoreUpdated = 0; //O player here is to set the score to update to html
    let drawScoreUpdate = 0;// Draw here is to set the score to update to html



    const winning = function (player) { //here is to select individual cell and print x to the winning pattern
        if ($("#1").html() === player && $("#2").html() === player && $("#3").html() === player ||
            $("#4").html() === player && $("#5").html() === player && $("#6").html() === player ||
            $("#7").html() === player && $("#8").html() === player && $("#9").html() === player ||
            $("#1").html() === player && $("#4").html() === player && $("#7").html() === player ||
            $("#2").html() === player && $("#5").html() === player && $("#8").html() === player ||
            $("#3").html() === player && $("#6").html() === player && $("#9").html() === player ||
            $("#1").html() === player && $("#5").html() === player && $("#9").html() === player ||
            $("#3").html() === player && $("#5").html() === player && $("#7").html() === player) {
            
                if (player === "x"){ //
                    xScoreUpdated = xScoreUpdated + 1; // here is to add the winning score by 1 to the current score board
                    playerX.html(xScoreUpdated);// here is to updated the score in the html
                    $('.popup1').addClass('show');// here is to let the popup div to show when X is the winner
                } else {
                    oScoreUpdated = oScoreUpdated + 1;
                    playerO.html(oScoreUpdated);
                    $('.popup2').addClass('show');
                }

        } else if ($('.cell:empty').length === 0) { // here is if all cell are filled, it will return a draw
            drawScoreUpdate = drawScoreUpdate + 1;
            draw.html(drawScoreUpdate);
            $('.popup3').addClass('show');
            // console.log('It\'s a draw');
        }
    }; // end of winning




    //on click function for all <div class="cell"> 9 cells 
    //all cells shared the same on click function
    $('.cell').on('click', function () {
        //because all the cells share the same on click function we be able to tell    
        //which one was click, and jquery will give us the click DOM node in the variable "this"
        // console.log('check on click working on cells', $(this).html());
        sound.play()
        // here first check if the cell is empty. you do this after coding the play turn function. 
        if ($(this).html() === 'x' || $(this).html() === 'o') { // check if x and o is placed
            // console.log('x and o already here');
            return // by returning this it will stop the function 

        } else {
            // console.log('when cell is empty');
        }

        if (playerTurn === true) { // if playerTurn is true then:  

            $(this).html('x'); // set the html in the clicked cell to 'x'
            playerTurn = false; // when playerTurn has finish, it will set the playerTurn false
            winning('x')// here to run winning condition to the player turn.

        } else { // if playerTurn is NOT true, then do this:

            $(this).html('o'); // set the html in the clicked cell to 'o'
            playerTurn = true; // its going to be player turn next click.
            winning('o')
        }
    }); // end of on click function

    $('#gameAgain').on('click', function () { // here is for the restart button 1
        // console.log('check restart button working?'); 

        sound.play()//click sound effect

        $('.cell').empty(); // use .empty() function to clear the cells
        $('.popup1').removeClass('show');
    })

    $('#gameAgain1').on('click', function () { // here is for the restart button
        // console.log('check restart button working?'); 
        $('.cell').empty(); // use .empty() function to clear the cells
        $('.popup2').removeClass('show');
    })

    $('#gameAgain2').on('click', function () { // here is for the restart button
        // console.log('check restart button working?'); 
        $('.cell').empty(); // use .empty() function to clear the cells
        $('.popup3').removeClass('show');
    })

})// end of jq