# Console-drawing (typescript)
practice javascript program for drawing on console

### Support functionality

- Create a new canvas
- Start drawing on the canvas with commands explained [HERE](#Commands)
- Quit

### Set-up
- node.js should have been installed
- To check if node is installed, try a command below
```bash
node -v
```
- install all dependencies of this project by running below command
```bash
npm install
```
- make sure installation of dependencies is errorless
- start the program by using below command. It'll auto compile all typescript files and will run executable
```bash
npm start
```
- for running test cases, run following command
```bash
npm test
```

## Problem statement
- [please more details on the problem statement here](problem-statement.txt)

### Assumptions
The command should be exactly matched to be executed.
> e.g. Invalid commands, <> means a space
C*5**5 : additional space
C**55 : additional space
- supported small case commands
- For color of Fill command, it only allows English alphabet, both small letter and capital letter.
- It doesn't allow to draw line or reactangle and fill wihtout Canvas.

It can draw line or reactangle again in coordinates that are filled with color.

## Commands

* Create canvas
```bash
C w h
```

> Description: Should create a new canvas of width w and height h.

<br><br>
* Draw line
```bash
L x1 y1 x2 y2
```

> Description: Should create a new line from (x1,y1) to (x2,y2). Currently only
horizontal or vertical lines are supported. Horizontal and vertical lines
will be drawn using the 'x' character.

<br><br>
* Draw Rectangle
```bash
R x1 y1 x2 y2
```

> Description: Should create a new rectangle, whose upper left corner is (x1,y1) and
lower right corner is (x2,y2). Horizontal and vertical lines will be drawn
using the 'x' character.

<br><br>
* Draw Rectangle
```bash
B x y c
```

> Description: Should fill the entire area connected to (x,y) with "colour" c. The
behavior of this is the same as that of the "bucket fill" tool in paint
programs.

<br><br>
* Quit
```bash
Q
``` 		         

> Description: Should quit the program.
