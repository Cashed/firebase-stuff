var beerRef = new Firebase('https://alexs-ales.firebaseio.com/');

var soundBrewery = beerRef.child('Sound-Brewery');
var loveCraft = beerRef.child('LoveCraft-Brewery');

soundBrewery.set({location: 'Poulsbo', site: 'http://soundbrewery.com/'});
loveCraft.set({location: 'Bremerton', site: 'http://www.lovecraftbrewing.com/'})

var soundList = [['Humulo Nimbus', 'true'], ['Monk\'s Indiscretion', 'true'], ['Poundage Porter', 'true']];

var soundBeers = soundBrewery.child('beers');

for (var beer = 0; beer < soundList.length; beer++) {
  soundBeers.child(soundList[beer][0]).set({isAvailable: soundList[beer][1]});
}

soundBeers.child('Poundage Porter').set({isAvailable: 'false'});

soundBeers.once('value', function(allBeers) {
  allBeers.forEach(function(specificBeer) {
    if (specificBeer.key() === 'Poundage Porter') {
      console.log(specificBeer.val().isAvailable);
    }
  });
});
