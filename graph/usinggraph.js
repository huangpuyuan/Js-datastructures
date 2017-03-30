    var graph = new Graph();
    var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (var i = 0; i < myVertices.length; i++) {
        graph.addVertex(myVertices[i]);
    }

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');


    console.log('********* printing graph ***********');

    console.log(graph.toString());

    console.log('********* bfs ***********');

    function printNode(value) {
        console.log('Visited certex: ' + value);
    }

    graph.bfs(myVertices[0], printNode);

    console.log('********* sorthest path - BFS ***********');
    var shortestPathA = graph.BFS(myVertices[0]);
    console.log(shortestPathA.distances);
    console.log(shortestPathA.predecessors);

    //from A to all other vertices
    var fromVertex = myVertices[0];

    for (i = 1; i < myVertices.length; i++) {
        var toVertex = myVertices[i],
            path = new Stack();
        for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
            path.push(v);
        }
        path.push(fromVertex);
        var s = path.pop();
        while (!path.isEmpty()) {
            s += ' - ' + path.pop();
        }
        console.log(s);
    }
