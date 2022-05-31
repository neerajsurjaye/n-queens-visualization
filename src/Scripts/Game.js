let Game = () => {

    //initializing visted
    let visited;

    //initialize 
    let stackX;
    let stackY;

    let stack;

    let init = (n) => {

        stackX = new Array();
        stackY = new Array();
        stack = new Array();

        visited = new Array(n);

        //initial elements
        for (let i = visited.length - 1; i >= 0; i--) {
            stackY.push(0);
            stackX.push(i);
        }

        //populates visited
        for (let i = 0; i < visited.length; i++) {
            visited[i] = new Array(n);
            visited[i].fill(0);
        }

    }

    let unvisit = () => {

        let curr = {
            y: stackY[stackY.length - 1],
            x: stackX[stackX.length - 1],
        }

        console.log("unvisiting ", curr.x, curr.y);

        stackY.pop();
        stackX.pop();
        stack.pop();
        visited[curr.y][curr.x] = 0;
    }

    let next = () => {
        //visits top node or unvisits


        let curr = {
            y: stackY[stackY.length - 1],
            x: stackX[stackX.length - 1],
        }

        console.log("next ", stackX, stackY);


        //if visited remove from stack
        if (visited[curr.y][curr.x] == 1) {
            unvisit();
            return false;
        } else {

            //setting visited
            visited[curr.y][curr.x] = 1;
            stack.push(curr);
            return true;
        }

    }

    let push = () => {
        //pushes childs on top of stack

        let curr = {
            y: stackY[stackY.length - 1],
            x: stackX[stackX.length - 1],
        }


        //adding next nodes
        if (curr.y + 1 < visited.length) {

            for (let i = visited.length - 1; i >= 0; i--) {
                stackY.push(curr.y + 1);
                stackX.push(i);
            }

        }

    }


    let check = () => {

        //checks if top node is correct or not
        let curr = {
            y: stackY[stackY.length - 1],
            x: stackX[stackX.length - 1],
        }

        //checking column
        let count = 0;
        for (let i = 0; i < visited.length; i++) {

            if (visited[i][curr.x] == 1) {
                count++;
            }

        }

        if (count > 1) {
            unvisit();
            return false;
        }
        return true;

    }

    let isComplete = () => {
        if (stackX.length == 0) {
            return true;
        }
        return false;
    }


    let getBoard = () => {
        console.log("getBoard");
        return visited;
    }

    let reset = () => {
        init();
    }

    return { next, reset, init, getBoard, push, check, isComplete };

}

export default Game;