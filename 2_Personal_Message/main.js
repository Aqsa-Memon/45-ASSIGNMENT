"use strict";
let personName = "";
personName = prompt("what is your name?") || "";
if (personName !== null && personName !== "") {
    alert(`Hello ${personName},whould you like to learn some typescript today?`);
}
else {
    alert("write your name!");
}
