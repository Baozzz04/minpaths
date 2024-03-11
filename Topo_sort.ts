function topologicalSort(graph: number[][]) {
    const visited = new Array(graph.length).fill(false);
    const stack: number[] = [];
    function dfs(node: number) {
        visited[node] = true;
        for (let i = 0; i < graph.length; i++) {
            if (graph[node][i] !== 0 && !visited[i]) dfs(i);
        }
        stack.push(node);
    }

    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) dfs(i);
    }

    return stack.reverse();
}
  
export function shortestPathTopo(graph: number[][], src: number) {
    const V = graph.length;
    const dist = new Array(V).fill(Number.MAX_VALUE);
    dist[src] = 0;

    const topOrder = topologicalSort(graph);

    for (let i = 0; i < V; i++) {
        const u = topOrder[i];

        for (let v = 0; v < V; v++) {
            if (graph[u][v] !== 0 && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    for (let i = 0; i < dist.length; i++) console.log(i, dist[i]);

    return dist;
}
  