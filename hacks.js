var accounttarget = "";
var people = "";
var commenttopost = "";
var temp1 = 0;

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function starthacks() {
  $.get("https://scratchhacks.github.io/people.txt").success(function(data){ 
 people = data;
 
});

  alert("scratchhacks loaded");
document.write('<hr><br><center><h1>ScratchHacks</h1><h3>Beta 1</h3><br><a href="#" onclick="startcommentspam();"><h4>Start account raid</h4></a><br><a href="#" onclick="startmassad();"><h4>Start mass advertisement</h4></a></center>');
}
 function dofunstuff(fn, timeout, interval) {
    var startTime = (new Date()).getTime();
    interval = interval || 1000;

    (function p() {
        fn();
        if (((new Date).getTime() - startTime ) <= timeout)  {
            setTimeout(p, interval);
        }
    })();
}
function makeid() {
  var text = "Message CURTOSY OF SCRATCHHACKS.GITHUB.IO ";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function adid() {
  var text = commenttopost + " (mass advertisment by ScratchHacks.github.io) ";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function ruinlifeplease() {
 $.post("https://scratch.mit.edu/site-api/comments/user/"+ accounttarget +"/add/", JSON.stringify({
      content: makeid(),
      parent_id: '',
      commentee_id: '',
    }), function(result){
      // It's all good :)
    });
}
function spredad() {
  temp1 = temp1 + 1;
  accounttarget = people.replace( /\n/g, " " ).split( " " )[temp1];
 $.post("https://scratch.mit.edu/site-api/comments/user/"+ accounttarget +"/add/", JSON.stringify({
      content: adid(),
      parent_id: '',
      commentee_id: '',
    }), function(result){
      // It's all good :)
    });
}
function startcommentspam() {
  accounttarget = prompt("Please enter the username of the account to target", "HarryPotter123");
  document.write("<hr><br><center><h1>ScratchHacks</h1><h3>Spamming account! Do not close or do anything to this tab untill you think you've spammed enough.</h3></center>");
  dofunstuff(ruinlifeplease, 600000000, 30000);	
}
function startmassad() {
 commenttopost = prompt("Please enter the comment you want to spred to 14,000 people(KEEP IT SHORT OR IT WON'T WORK)", "HarryPotter123");
    document.write("<hr><br><center><h1>ScratchHacks</h1><h3>Spreading mass advertisment! Sending one ad every 30 seconds, so to reach 14,000 people it'll take about 5 days, but close this tab once you think you've reached enough people.</h3></center>");
    dofunstuff(spredad, 600000000, 30000);	
}
