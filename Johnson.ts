// export function johnsonsAlgorithm(A: number[][]) {
//     const V = A.length;

//     // Step 1: Add a new vertex connected to all other vertices with zero-weight edges
//     const newVertex = V;
//     const augmentedGraph = new Array(V + 1).fill(0).map(() => new Array(V + 1).fill(0));

//     for (let i = 0; i < V; i++) {
//         for (let j = 0; j < V; j++) {
//             augmentedGraph[i][j] = A[i][j];
//         }
//     }

//     for (let i = 0; i < V; i++) {
//         augmentedGraph[newVertex][i] = 0;
//         augmentedGraph[i][newVertex] = Infinity;
//     }

//     // Step 2: Run Bellman-Ford algorithm to find shortest paths from the new vertex
//     const distance = new Array(V + 1).fill(Infinity);
//     distance[newVertex] = 0;

//     for (let k = 0; k < V; k++) {
//         for (let i = 0; i <= V; i++) {
//             for (let j = 0; j <= V; j++) {
//                 if (augmentedGraph[i][j] !== 0 && distance[i] + augmentedGraph[i][j] < distance[j]) {
//                     distance[j] = distance[i] + augmentedGraph[i][j];
//                 }
//             }
//         }
//     }

//     // Step 3: Remove the added vertex and run Dijkstra's algorithm for each vertex
//     const shortestPaths = new Array(V).fill(null).map(() => new Array(V).fill(Infinity));

//     for (let src = 0; src < V; src++) {
//         const minHeap = new MinHeap();
//         const dist = new Array(V).fill(Infinity);
//         dist[src] = 0;
//         minHeap.insert({ vertex: src, distance: 0 });

//         while (!minHeap.isEmpty()) {
//             const { vertex } = minHeap.extractMin();

//             for (let neighbor = 0; neighbor < V; neighbor++) {
//                 if (A[vertex][neighbor] !== 0 && dist[vertex] + A[vertex][neighbor] < dist[neighbor]) {
//                     dist[neighbor] = dist[vertex] + A[vertex][neighbor];
//                     minHeap.insert({ vertex: neighbor, distance: dist[neighbor] });
//                 }
//             }
//         }

//         for (let dest = 0; dest < V; dest++) {
//             shortestPaths[src][dest] = dist[dest] - distance[src] + distance[dest];
//         }
//     }

//     console.log(shortestPaths);

//     return shortestPaths;
// }

// class MinHeap {
//     heap: { vertex: number; distance: number }[];

//     constructor() {
//         this.heap = [];
//     }

//     insert(node: { vertex: number; distance: number }): void {
//         this.heap.push(node);
//         this.heapifyUp();
//     }

//     extractMin(): { vertex: number; distance: number } | null {
//         if (this.isEmpty()) {
//             return null;
//         }

//         const min = this.heap[0];
//         const lastNode = this.heap.pop();

//         if (this.heap.length > 0 && lastNode !== undefined) {
//             this.heap[0] = lastNode;
//             this.heapifyDown();
//         }

//         return min || null; // Fix here
//     }

//     isEmpty(): boolean {
//         return this.heap.length === 0;
//     }

//     heapifyUp(): void {
//         let index = this.heap.length - 1;

//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.heap[index].distance < this.heap[parentIndex].distance) {
//                 [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     heapifyDown(): void {
//         let index = 0;

//         while (true) {
//             const leftChildIndex = 2 * index + 1;
//             const rightChildIndex = 2 * index + 2;
//             let smallestChildIndex = index;

//             if (
//                 leftChildIndex < this.heap.length &&
//                 this.heap[leftChildIndex].distance < this.heap[smallestChildIndex].distance
//             ) {
//                 smallestChildIndex = leftChildIndex;
//             }

//             if (
//                 rightChildIndex < this.heap.length &&
//                 this.heap[rightChildIndex].distance < this.heap[smallestChildIndex].distance
//             ) {
//                 smallestChildIndex = rightChildIndex;
//             }

//             if (smallestChildIndex !== index) {
//                 [this.heap[index], this.heap[smallestChildIndex]] = [
//                     this.heap[smallestChildIndex],
//                     this.heap[index],
//                 ];
//                 index = smallestChildIndex;
//             } else {
//                 break;
//             }
//         }
//     }
// }
