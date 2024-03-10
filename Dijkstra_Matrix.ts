function printSolution(dist: number[], V: number) {
    for(let i = 0; i < V; i++) console.log(i, dist[i]);
}

function minDistance(dist: number[], sptSet: boolean[], V: number): number {
    let min = Number.MAX_VALUE;
    let min_index = -1;
    for(let v = 0; v < V; v++) {
        if (sptSet[v] == false && dist[v] <= min) { // select the node which is not visited from u, with the minimum distance
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}
 
export function dijkstra(graph: number[][], src: number, V: number) {
    let dist = new Array(V);
    let visit = new Array(V);
     
    for(let i = 0; i < V; i++) {
        dist[i] = Number.MAX_VALUE; // all is oo
        visit[i] = false; // does not visit any node yet
    }
     
    dist[src] = 0;
    for(let count = 0; count < V - 1; count++) {
        let u = minDistance(dist, visit, V); // select the node with min distance
        visit[u] = true; // assign visit = true
        for(let v = 0; v < V; v++) {
            // if neighbor is not visited, and there is a path from u to v, and dv > du + path
            if (!visit[v] && graph[u][v] != 0 && dist[u] != Number.MAX_VALUE && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v]; // assignment
            }
        }
    }
    
    printSolution(dist, V);
}