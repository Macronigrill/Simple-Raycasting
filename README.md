This Module contains simple Raycasting functions to assist in creating macros for FoundryVTT.
Goals: Provide easy to use Raycasting functionality to use in macros. Mainly intended to be used with Sequencer to enable more complex animations.
Current state of development: In this preview version, only a Basic Raycast is available. Options for Sweeping rays or thick rays will be added later.
---------------------------------------------------------------------------------------------------------------------------------------------------
How to use:
The module provides a Raycast class that can be used to intercept walls. In foundry, you can see the exact code by opening the browser console with F12 and typing "Raycast()"
The module will at some point provide multiple options but for now only a simple raycast towards a target is available.
When more features are available, proper documentation will be provided as well.

constructor:
new Raycast()
initializes a new instance of the raycast class.

methods:
origin(Point);
sets the origin of the ray to the given position. to take a tokens position use token.center

target(Point,distance?);
sets the target of the ray to the given position, and specifies how long the ray should be. By default the distance is 5000 pixels which should cover most maps fully.

shiftAngle(angle in degrees,distance?)
shifts the angle to ray by the specified number of degrees. requires a target to be selected first. Also allows modification of the distance.

hit()
returns the first location where the ray hits a wall.
