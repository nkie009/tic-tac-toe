$(document).ready(function(){
    console.log('check if its working')

    let player1Turn = true;
    
    //on click function for all <div class="cell"> 9 cells 
    //all cells shared the same on click function
    $('.cell').on('click', function(){ 
        //because all the cells share the same on click function we be able to tell which one was click, and jquery will give us the click DOM node in the variable "this"
        console.log('check on click working on cells', $(this).html());
        // first check if the cell is empty
        if( $(this).html() === 'x' ){
            console.log('x already here');
        } else if ( $(this).html() === 'o' ){
            console.log('o is here');
        } else {
            console.log('when cell is empty');
        }


        if (player1Turn === true){ // if player1Turn is true then:              
            
            $(this).html('x'); // set the html in the clicked element to 'x'
            player1Turn = false; // player1Turn is over now, so set player1Turn to false.
            
        } else { // if player1Turn is NOT true, then do this:

            $(this).html('o'); // set the html in the clicked element to 'o'

            player1Turn = true; // its going to be player1 turn next click.
        }



    }); // end of on click function



})// end of jq
