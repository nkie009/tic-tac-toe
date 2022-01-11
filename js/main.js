$(document).ready(function(){
    console.log('check if its working')

    let playerTurn = true;
    

    
    const winning = function(){
        if ($("#1").html() === "x" && $("#2").html() === "x" && $("#3").html() === "x" || ) {
            console.log('x win');
        } 
    }


    //on click function for all <div class="cell"> 9 cells 
    //all cells shared the same on click function
    $('.cell').on('click', function(){ 
        //because all the cells share the same on click function we be able to tell     which one was click, and jquery will give us the click DOM node in the variable "this"
        // console.log('check on click working on cells', $(this).html());
       
        // first check if the cell is empty. you do this after coding the play1turn function. 
        if( $(this).html() === 'x' || $(this).html() === 'o' ){ // check if x is placed
            // console.log('x and o already here');
            return // this is to stop the function 
        // } else {
        //     console.log('when cell is empty');
        }

        if (playerTurn === true){ // if playerTurn is true then:              
            
            $(this).html('x'); // set the html in the clicked element to 'x'
            playerTurn = false; // playerTurn is over now, so set playerTurn to false.
            
            winning()
        
        } else { // if playerTurn is NOT true, then do this:

            $(this).html('o'); // set the html in the clicked element to 'o'

            playerTurn = true; // its going to be player turn next click.
            
        }


    }); // end of on click function

    $('#gameRestart').on('click', function(){
        console.log('check restart button working');      
    })


})// end of jq
