var colour = ["Aqua", "Black"，"Blue", "Brown", "Coral", "Crimson", "Gold", "LightCyan",
              "OrangeRed", "Pink", "Violet", "White", "Yellow"];
var target;

var finished = false;
var guessstime = 0;
var guessedcolor = new Array(12);

function do_game() {
    var random_number = Math.random() * 13;
    var random_number_integer = Math.floor(random_number);
    target = colour[random_number_integer];

    while (!finished) {
        guess_input_text = prompt("I am thinking of a colour "+
                                  "in below.\n\n"+ colour +
                                  "\n\nYou've gussed colour" + guessedcolor +
                                  "\n\nWhat is the colour?");
        guess_input = parseInt(guess_input_text);
        guesses += 1;
        guessedcolor.push = target;
        finished = check_guess();
    }
}

function check_guess() {
    if (isNaN(guess_input)) {
        alert("You have not entered a number.\n\n" +
              "Please enter a number in the range 1 to 100.");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)) {
        alert("Please enter an integer number in the range 1 to 100.");
        return false;
    }
    if (guess_input > target) {
        alert("Your number is too large!");
        return false;
    }
    if (guess_input < target) {
        alert("Your number is too small!");
        return false;
    }
    alert("You got it! The number was " + target +
          ".\n\nIt took you " + guesses +
          " guesses to get the number!");
    return true;
}
