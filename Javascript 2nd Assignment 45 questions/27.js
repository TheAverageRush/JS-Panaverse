/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

var alien_color = [`red`,`green`,`yellow`];
for (let i = 0; i < alien_color.length; i++)
    {
        if (alien_color[i] == `red`)
            {
                console.log(`Alien color is red. Player earned 15 points.`);
            }
        else if (alien_color[i] == `green`)
            {
                console.log(`Alien color is green. Player earned 5 points.`);
            }
        else
            {
                console.log(`Alien color is yellow. Player just earned 10 points`);
            }
    }
