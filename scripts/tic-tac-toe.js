var counter;
setCounter(0);

$("button").click(function() {
        if(counter % 2 == 0 && $(this).hasClass("enabled")) {
            $(this).text("X"); 
            counter++;
            $("h4").text("Player 2's Turn");
            $(this).removeClass("enabled");
        }
        else if (counter % 2 == 1 && $(this).hasClass("enabled")) {
            $(this).text("O");
            counter++;
            $("h4").text("Player 1's Turn");
            $(this).removeClass("enabled");
        } 
    
    // X - Wins
    if($(".btn1").text() == "X" && $(".btn2").text() == "X" && $(".btn3").text() == "X") {
        winner(getCounter());
    }
    if($(".btn4").text() == "X" && $(".btn5").text() == "X" && $(".btn6").text() == "X") {
        winner(getCounter());
    }
    if($(".btn7").text() == "X" && $(".btn8").text() == "X" && $(".btn9").text() == "X") {
        winner(getCounter());
    }
    if($(".btn1").text() == "X" && $(".btn4").text() == "X" && $(".btn7").text() == "X") {
        winner(getCounter());
    }
    if($(".btn2").text() == "X" && $(".btn5").text() == "X" && $(".btn8").text() == "X") {
        winner(getCounter());
    }
    if($(".btn3").text() == "X" && $(".btn6").text() == "X" && $(".btn9").text() == "X") {
        winner(getCounter());
    }
    if($(".btn1").text() == "X" && $(".btn5").text() == "X" && $(".btn9").text() == "X") {
        winner(getCounter());
    }
    if($(".btn3").text() == "X" && $(".btn5").text() == "X" && $(".btn7").text() == "X") {
        winner(getCounter());
    }
    
    
    // O - Wins
    if($(".btn1").text() == "O" && $(".btn2").text() == "O" && $(".btn3").text() == "O") {
        winner(getCounter());
    }
    if($(".btn4").text() == "O" && $(".btn5").text() == "O" && $(".btn6").text() == "O") {
        winner(getCounter());
    }
    if($(".btn7").text() == "O" && $(".btn8").text() == "O" && $(".btn9").text() == "O") {
        winner(getCounter());
    }
    if($(".btn1").text() == "O" && $(".btn4").text() == "O" && $(".btn7").text() == "O") {
        winner(getCounter());
    }
    if($(".btn2").text() == "O" && $(".btn5").text() == "O" && $(".btn8").text() == "O") {
        winner(getCounter());
    }
    if($(".btn3").text() == "O" && $(".btn6").text() == "O" && $(".btn9").text() == "O") {
        winner(getCounter());
    }
    if($(".btn1").text() == "O" && $(".btn5").text() == "O" && $(".btn9").text() == "O") {
        winner(getCounter());
    }
    if($(".btn3").text() == "O" && $(".btn5").text() == "O" && $(".btn7").text() == "O") {
        winner(getCounter());
    }
    
    
});

function winner(counter) {
    var player;
    if(counter % 2 == 1) {
        player = 1;
    }
    else {
        player = 2;
    }
    
    alert("Player " + player + " Wins!");
    $("h4").text("Restarting...");
    setTimeout(function() {
        $("h4").text("Player " + player + "'s Turn");
        $("button").text("_");       
    }, 1000);
    setCounter(player - 1);
    $("button").addClass("enabled");
}

function setCounter(counter) {
    this.counter = counter;
}

function getCounter() {
    return counter;
}
