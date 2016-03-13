Custom Firebase Keys
---------------------

Everyone thinks you have the best taste in beer so you decide to create a new app called Alex’s Ales where people will be able to see what your favorite local breweries have on tap.  

You decide to use Firebase so you can easily keep track and update the taps.

![alt text](http://i.imgur.com/RtfGoYa.png)

Once a reference to the Firebase location is set on line 1, two breweries are added as child nodes on that reference.  We can specify the name of those child nodes as a parameter inside the child() method.

Notice the different methods used on line 6 and 7:
On line 6, we use the set() method to add properties and values to the soundBrewery node we created.
On line 7, we use push() to add the properties and values to the lovecraft node.

Here is the difference reflected in our database:

![alt text](http://i.imgur.com/eMOenzb.png)

Firebase created a special key when we used push() on our lovecraft node.  This is because the push() method creates an anonymous node with the properties and values you give and then the node is given a key by Firebase in case you may want to reference it later.  This is great if many nodes may be created by multiple people and you don’t want to run into naming conflicts where one node’s key may overwrite another.

However, this is not what we want, so we will need to change the push() on line 7 to set().

Now that we have our two brewery nodes with basic info attached, we want to add our favorite beers from each brewery.  The array, soundList, we created holds each beer’s name and a boolean representing availability from Sound Brewery.

So we create a child node on the Sound-Brewery node and begin populating it with the beers from our array.

![alt text](http://i.imgur.com/LXoc8vX.png)

Now our database looks like this:

![alt text](http://i.imgur.com/rpvOePN.png)

This is exactly what we want!  Now we can navigate through our database using keys that make sense to us, such as when we want to update the availability of certain beers.

![alt text](http://i.imgur.com/VNhMkNS.png)

![alt text](http://i.imgur.com/RaUjGGw.png)
