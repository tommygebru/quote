$(document).ready(function() {

  var randomQuote, randomValue, quoteArray;

  var quoteArray = ["That's planning for failure, Morty... even dumber than regular planning", "It's like Inception, so if it's confusing and stupid so is everyone's favorite movie", "You pass butter", "So what are you-like the devil?", "What, so everyone's supposed to sleep like every single night now? You do realize that nighttime makes up half of all time", "A hair, Morty. I need one of your hairs. This isn't Game of Thrones.", "Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie", "Sometimes science is more art than science. A lot of people don't get that.", "Where are my testicles Summer?", " The first rule of space travel, kids is always check out distress beacons. Nine out of ten times it's a ship full of dead aliens and a bunch of free shit!", "Pluto is a planet", "Weddings are basically just funerals with cake", "I've been Zuckerberging people before Zuckerberg's balls dropped!", "I don't think we can perform our new song, The Recipe For Concentrated Dark Matter for a crowd this tiny", "Break the cycle, Morty. Rise above! Focus on science.", "Well, scientifically, traditions are an idiot thing", "Morty! you gotta turn into a car", "WUBBA LUBBA DUB DUB", "Whoa, spoilers! I'm a whole season behind.", "You don't have to try to impress me Morty.", "Your failures are your own, old man! I say, FOLLOW THROOOOUGH!", "This guy's taking Roy off the grid! This guy doesn't have a social security number for Roy!", "Steve put that memory in you brain, so he can stay in your house, eat your food and multiply!", "GET IN THE GOD DAMN SHIP, EVERYTHING'S ON A COB, THE WHOLE PLANET'S ON A COB!", "Excuse me Sir, is your Morty insured? Every year hundreds of Mortys are injured..."]; //end quoteArray


  var randomValue = Math.floor((Math.random() * quoteArray.length));//end random
  var randomQuote = quoteArray[randomValue];
  $("#tweet").attr("href", "https://twitter.com/intent/tweet?text="+randomQuote);

  $(".new").click(function() {
    randomValue = Math.floor((Math.random() * quoteArray.length));
    randomQuote = quoteArray[randomValue];
    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text="+randomQuote);
    $(".quote").text(quoteArray[randomValue]);
  }); //end new





}); //end jquery
