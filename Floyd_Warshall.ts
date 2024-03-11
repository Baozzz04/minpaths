const INF = Number.MAX_SAFE_INTEGER;

export function floydWarshall(graph: number[][]) {
  const n = graph.length;
  const dist = new Array(n).fill(null).map(() => new Array(n).fill(0));

  // Initialize the distance matrix with the given graph
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  // Update the distance matrix using intermediate vertices
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] !== INF && dist[k][j] !== INF && dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
