//create a variable called alien_color
var alien_color = "green";
//write an if statment to test whether the alien's color is green. if it is,
//print a message that the player just erned 5 Points.
if (alien_color === 'green') {
    console.log("player just earned 5 points !");
}
//write one version of this program that passes the if test and another that fails.
alien_color = "Yellow";
//(The version that fails will have no output.)
if (alien_color === 'Green') {
    console.log("player just earned 5 points !");
}
;
