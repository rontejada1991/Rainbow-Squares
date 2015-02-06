"use strict";

var Game = {
    canvas : undefined,
    canvasContext : undefined,
    rectanglePosition : 0,
    oppositeRectanglePosition : 0,
    yPosition : 0,
    oppositeYPosition : 0
};

Game.start = function() {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.mainLoop();
};

document.addEventListener('DOMContentLoaded', Game.start);

Game.clearCanvas = function() {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);  
};

Game.update = function() {
    var d = new Date();
    
    // Increases from 0 to horizontal canvas size
    Game.rectanglePosition = (d.getTime() / 2) % Game.canvas.width;
    
    // Decreases from horizontal canvas size to 0
    Game.oppositeRectanglePosition = Game.canvas.width -
    (d.getTime() / 2) % Game.canvas.width;
    
    // Increases from 0 to vertical canvas size
    Game.yPosition = (d.getTime() / 2) % Game.canvas.height;
    
    // Decreases from vertical canvas size to 0
    Game.oppositeYPosition = Game.canvas.height -
    (d.getTime() / 2) % Game.canvas.height;
};

Game.draw = function() {
    Game.canvasContext.fillStyle = "black";
    Game.canvasContext.fillRect(0, 0, Game.canvas.width, Game.canvas.height);

    // Move from top to bottom
    // Subtracting half of the squares width to center it
    Game.canvasContext.fillStyle = "red";
    Game.canvasContext.fillRect((Game.canvas.width / 2) - 25,
                                Game.rectanglePosition, 50, 50);
 
    // Move diagonally from top-right to bottom-right
    // Subtracting 50 to make room for the square size
    Game.canvasContext.fillStyle = "orange";
    Game.canvasContext.fillRect(Game.oppositeRectanglePosition - 50,
                        Game.yPosition, 50, 50);

    // Move from right to left
    // Subtracting 50 to make room for the square size
    Game.canvasContext.fillStyle = "yellow";
    Game.canvasContext.fillRect(Game.oppositeRectanglePosition - 50,
                                (Game.canvas.height / 2) - 25, 50, 50);

    // Move diagonally from bottom-right to top-left
    // Subtracting 50 to make room for the square size
    Game.canvasContext.fillStyle = "green";
    Game.canvasContext.fillRect(Game.oppositeRectanglePosition - 50,
                                Game.oppositeYPosition - 50, 50, 50);

    // Move from bottom to top
    // Subtracting half of the squares width to center it
    // Subtracting 50 to make room for the square size
    Game.canvasContext.fillStyle = "blue";
    Game.canvasContext.fillRect((Game.canvas.width / 2) - 25,
                                Game.oppositeYPosition - 50, 50, 50);

    // Move diagonally from bottom-left to top-right
    // Subtracting 50 to make room for the square size
    Game.canvasContext.fillStyle = "indigo";
    Game.canvasContext.fillRect(Game.rectanglePosition,
                                Game.oppositeRectanglePosition - 50, 50, 50);
    
    // Move from left to right
    Game.canvasContext.fillStyle = "violet";
    Game.canvasContext.fillRect(Game.rectanglePosition,
                                (Game.canvas.height / 2) - 25, 50, 50);
        
    // Move diagonally from top-left to bottom-right
    Game.canvasContext.fillStyle = "white";
    Game.canvasContext.fillRect(Game.rectanglePosition,
                                Game.yPosition, 50, 50);

};

Game.mainLoop = function() {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};
