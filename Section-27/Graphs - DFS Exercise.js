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
    depthFirstSearch(start){
        let result = []
        let visited = {}
        let adjacencyList = this.adjacencyList;
        (function helper(vertex) {
            if(!vertex) return null
            result.push(vertex)
            visited[vertex] = true
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return helper(neighbor)
                }
            })
        })(start)
        
        return result
    }
}
