var socket = io("http://192.168.1.103:3000");


$(document).ready(function(){
    alert("Tuyen Tinh");
if (annyang) {
  // Let's define a command.
  var commands = {
    'Dâu tây': function() {
      socket.emit("xin chao");
       alert('Tôi giúp được gì?'); 
     },
    'tạm biệt': function() { alert('See you later!'); },
    'Dâu tây tắt đèn': function() { alert('Tắt đèn!'); },
  };
// This should be true
  console.log(annyang.isListening());
  // Add our commands to annyang
  annyang.addCommands(commands);
  // Start listening.
  annyang.start();
  annyang.addCallback('soundstart', function() {
    console.log('sound detected');
  });
}
});


  