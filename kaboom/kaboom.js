// import kaboom lib
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("froggy", "sprites/froggy.png");
// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(130, 80),
]);


