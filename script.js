//your JS code here. If required.
let element = document.getElementById('level');
let level = 0;
while (element) {
    level++;
    element = element.parentNode;
}
alert('The level of the element is: ' + level);
