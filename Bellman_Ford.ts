export function BellmanFord(graph: number[][], source: number) {
    const vertices = graph.length;
    const distances = Array(vertices).fill(Number.MAX_SAFE_INTEGER);
    distances[source] = 0;
  
    // Relax edges repeatedly
    for (let i = 0; i < vertices - 1; i++) {
      for (let u = 0; u < vertices; u++) {
        for (let v = 0; v < vertices; v++) {
          if (graph[u][v] !== 0 && distances[u] + graph[u][v] < distances[v]) {
            distances[v] = distances[u] + graph[u][v];
          }
        }
      }
    }
  
    // Check for negative cycles
    for (let u = 0; u < vertices; u++) {
      for (let v = 0; v < vertices; v++) {
        if (graph[u][v] !== 0 && distances[u] + graph[u][v] < distances[v]) {
          console.log("Graph contains negative cycle");
          return;
        }
      }
    }
  
    // Print the shortest distances
    // console.log("Vertex   Distance from Source");
    for(let i = 0; i < vertices; i++) console.log(i, distances[i]);
  }