//Got to https://www.linkedin.com/mynetwork/ and run this script to console


var buttons = document.getElementsByTagName('button');

var connectButtons = []

for (var i = 0; i < buttons.length; i++) {
  var text = buttons[i].textContent;
  if (text.includes('Connect')) {
    connectButtons.push(buttons[i])
  }

}

console.log(connectButtons.length)

var total = 0;

setInterval(function() {

  var length = connectButtons.length;
  if (length != 0) {

    var connectHead = connectButtons[0];
    connectButtons.shift();
    if (total < 90) {
      connectHead.click();
      total++
      console.log("clicked")
      console.log(total)
    }


  }

}, 3000);
