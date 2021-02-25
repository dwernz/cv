var display = "";

$("button").click(function() {
    if($(this).hasClass("clear")) {
        display = "0";
        $("h4").text(display);
        console.log(display);
    }
    if($(this).hasClass("parentheses")) {
        alert("()");
    }
    if($(this).hasClass("percent")) {
        alert("%");
    }
    if($(this).hasClass("divide")) {
        alert("/");
    }
    if($(this).hasClass("multiply")) {
        alert("*");
    }
    if($(this).hasClass("subtract")) {
        alert("-");
    }
    if($(this).hasClass("add")) {
        add(display);
    }
    if($(this).hasClass("decimal")) {
        alert(".");
    }
    if($(this).hasClass("switch")) {
        alert("+/-");
    }
    if($(this).hasClass("equals")) {
        alert("=");
    }
    if(display.length < 15) {
        if(display[0] == "0") {
            display = "";
        }
        if($(this).hasClass("one")) {
            display = display + "1";
            $("h4").text(display);
            console.log(display);
        }
        if($(this).hasClass("two")) {
            display = display + "2";
            $("h4").text(display);
        }
        if($(this).hasClass("three")) {
            display = display + "3";
            $("h4").text(display);
        }
        if($(this).hasClass("four")) {
            display = display + "4";
            $("h4").text(display);
        }
        if($(this).hasClass("five")) {
            display = display + "5";
            $("h4").text(display);
        }
        if($(this).hasClass("six")) {
            display = display + "6";
            $("h4").text(display);
        }
        if($(this).hasClass("seven")) {
            display = display + "7";
            $("h4").text(display);
        }
        if($(this).hasClass("eight")) {
            display = display + "8";
            $("h4").text(display);
        }
        if($(this).hasClass("nine")) {
            display = display + "9";
            $("h4").text(display);
        }
        if($(this).hasClass("zero")) {
            display = display + "0";
            $("h4").text(display);
        }
    }
    
});