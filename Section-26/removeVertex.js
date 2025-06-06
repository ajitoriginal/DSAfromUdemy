class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
        );
    }
    removeVertex(vertex){
        for(let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
}
