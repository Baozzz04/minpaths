const INF = Number.MAX_SAFE_INTEGER;

export function floydWarshall(graph: number[][]): number[][] {
  const n = graph.length;
  const dist: number[][] = new Array(n).fill(null).map(() => new Array(n).fill(0));

  // Initialize distance matrix with the given graph
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  // Apply Floyd-Warshall algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] !== INF && dist[k][j] !== INF && dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  // Print final results
  console.log("Shortest distances between all pairs:");
  for (let i = 0; i < n; i++) {
    console.log(`${i} ${dist[0][i]}`);
  }

  return dist;
}