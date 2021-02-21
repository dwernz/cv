var number = prompt("Enter number to count to: ");

var output = [];

for(var i = 0; i < number; i++) {
    if(((i + 1) % 3 == 0) && (i + 1) % 5 == 0) {
        output[i] = "FizzBuzz";
    }
    else if ((i + 1) % 5 == 0) {
        output[i] = "Buzz";
    }
    else if ((i + 1) % 3 == 0) {
        output[i] = "Fizz";
    }
    else {
       output[i] = (i + 1); 
    }
}

alert(output);