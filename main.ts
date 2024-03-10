import { recordUserCities } from './user_input';
import { converter } from './list_converter';
import { dijkstra } from './Dijkstra_Matrix';
import { performance } from 'perf_hooks';
import { BellmanFord } from './Bellman_Ford'
// import { floydWarshall } from './Floyd_Warshall'
// import { johnsonsAlgorithm } from './Johnson'

// User input
let stringCity = recordUserCities();
// Processed the input string
let processedStringCities = converter(stringCity);
// Use Google Map API to build the adjacency matrix

// Assume that we have the adjacency matrix
const A = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
            [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
            [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
            [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
            [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
            [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
            [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
            [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
            [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ]

// Record the time taken for Dijkstra to find the shortest path
var startTimeDijkstra = performance.now();
dijkstra(A, 0, A.length);
var endTimeDijkstra = performance.now()
console.log(`Call to dijkstra took ${endTimeDijkstra - startTimeDijkstra} milliseconds`)

// Record the time taken for Bellman Ford to find the shortest path
var startTimeBF = performance.now();
BellmanFord(A, 0);
var endTimeBF = performance.now()
console.log(`Call to BellmanFord took ${endTimeBF - startTimeBF} milliseconds`)

// Record the time taken for Floyd Warshall to find the shortest path
// var startTimeFW = performance.now();
// floydWarshall(A);
// var endTimeFW = performance.now()
// console.log(`Call to BellmanFord took ${endTimeFW - startTimeFW} milliseconds`)

// Record the time taken for Johnson to find the shortest path