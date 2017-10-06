/**
 * Create an object named Myrover, with position and direction as properties 
  position (object) contains the two coordinates of the Rover.
      x (integer) is the value of the horizontal position of the Rover.
      y (integer) is the value of the vertical position of the Rover.
      xr (integer) is the value of the horizontal relative position of the Rover.
      yr (integer) is the value of the vertical relative position of the Rover.
  direction (string) is the value of where is looking the Rover. 
  Can have the next values: 'f' forward , 'r' right, 'l' left, 'b' back.
 */ 

var Myrover = {
  position: {
    x: 0,
    y: 0,
    xr: 0,
    yr: 0,
  },
  direction: 'up'
};

/**
 * Create an object named obstacles with position as properties, to give random values to the obstacles
position (object) contains the two coordinates of the obstacle.
      x (integer) is the value of the horizontal position of the obstacle.
      y (integer) is the value of the vertical position of the obstacle.
 */ 

var obstacles = {
  position: {
    x: Math.floor((Math.random()*9) +1),
    y: Math.floor((Math.random()*9) +1),
  }
};

// The array with the commands, which will use the Rover to advance 
var orders = ['f', 'r', 'f','f','f','f','f','f','f','f','f','f','f','l','f','f','f','f','f','f','f','f','f','f','f','f','f'];

// We communicate the size of the grid 
console.log("The grid is 10x10");

// The for check each position of the array 
for (var i = 0; i < orders.length; i++) {

  // Console.log to comunicate the actual position of the rover 

  console.log("Rover is now here: [" + Myrover.position.x + ", " + Myrover.position.y + "]");

  /** 
   * Call the function move inside the for , this function is in charge of the movement of the Rover, using the array orders*/

  move(orders[i])

  /**
   * Here we check, if the Rover is moving to a position more than 
   */
  check (Myrover.position,'x'); 
  check (Myrover.position,'y');
  
  /**
   * We check using an "if" , if the next position of the rover is the same as the obstacule created. If it's the same position
  we will say "If the rover move, the rover will crash with an obstacle" and if is not the same position, 
  will continue with the movement"*/

  if (Myrover.position.x === obstacles.position.x && Myrover.position.y === obstacles.position.y) {
    console.log("If the rover move, the rover will crash with an obstacle");
    Myrover.position.x = Myrover.position.xr;
    Myrover.position.y = Myrover.position.yr;
    break;

  }
  else {
    Myrover.position.xr = Myrover.position.x;
    Myrover.position.yr = Myrover.position.y;
  }

};
/**
 * Create the function "check". Will check the values of the position to do the Rover move in spheral grid.
 */ 
function check(actualposition,value){
  if(actualposition[value] > 9)
    actualposition[value] = 0;
  else if(actualposition[value] < 0)
    actualposition[value] = 9;
}

/**
 * Create the function "move". We give the value "currentoder" to the function. 
 * Currentorder(string) take the values from the array orders(f,r,l,b).
 */ 

function move(currentorder)

/** 
 * Every if of the function, checks the value of the objetct direction(string). First step is check where is looking the Rover.
Sedcond step is depending on where is looking the Rover, the function will ++ or -- a position into the Rover coordinates. 
Or change the value of the object direction.
 */ 
{
  if (Myrover.direction === 'up') {

    switch (currentorder) {
      case 'f':
        Myrover.position.x++
        break;
      case 'r':
        Myrover.direction = 'right';
        return;
        break;
      case 'b':
        Myrover.position.x--
        break;
      case 'l':
        Myrover.direction = 'left'
        return;
        break;
    };
  };


  if (Myrover.direction === 'right') {
    switch (currentorder) {
      case 'f':
        Myrover.position.y++
        break;
      case 'r':
        Myrover.direction = 'down';
        return;
        break;
      case 'b':
        Myrover.position.y--
        break;
      case 'l':
        Myrover.direction = 'up';
        return;
        break;
    };
  };

  if (Myrover.direction === 'down') {
    switch (currentorder) {
      case 'f':
        Myrover.position.x--
        break;
      case 'r':
        Myrover.direction = 'left'
        return;
        break;
      case 'b':
        Myrover.position.x++
        break;
      case 'l':
        Myrover.direction = 'right'
        return;
        break;
    };
  };

  if (Myrover.direction === 'left') {
    switch (currentorder) {
      case 'f':
        Myrover.position.y--
        break;
      case 'r':
        Myrover.direction = 'up'
        return;
        break;
      case 'b':
        Myrover.position.y++
        break;
      case 'l':
        Myrover.direction = 'down'
        return;
        break;
    };
  };
};

/**
 * Outputr the final position of the rover
 */
console.log("Rover is stopped on: [" + Myrover.position.x + ", " + Myrover.position.y + "]");





