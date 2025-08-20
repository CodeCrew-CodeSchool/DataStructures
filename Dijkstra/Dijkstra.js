// Requires: npm install heap-js
import { MinHeap } from "heap-js";

/**
 * Class to Build a Weighted Graph Step-by-Step and Run Dijkstra
 *
 * Graph Representation:
 * - Adjacency List stored as a Map: node -> [{ to, weight }, ...]
 * - Supports directed or undirected graphs via constructor flag.
 *
 * Notes:
 * - Assumes non-negative edge weights
 * - Uses MinHeap from `heap-js` to order nodes by tentative distance.
 * - Uses "lazy" decrease-key: push updated entries and skip stale ones on pop.
 */
export class DijkstraGraph {
    /**
     * Constructor to Create an EMPTY Graph
     * @param {boolean} directed - true for directed edges; false for undirected
     */
    constructor(directed = true) {
        this.directed = directed;   //Store graph directionality
        this.adj = new Map();       //Adjacency list: node -> array of { to, weight }
    }

    /**
     * Method to Add a Node to the Graph
     * @param {string|number} u - Node label
     * @returns {void}
     *
     * Logic:
     * - If node not present, initialize its neighbor list.
     */
    addNode(u) {
        //Only add if not already present
        if (!this.adj.has(u)) {
            this.adj.set(u, []);
        }
    }

    /**
     * Method to Add or Update a Weighted Edge
     * @param {string|number} u - From node
     * @param {string|number} v - To node
     * @param {number} w - Non-negative weight
     * @returns {void}
     *
     * Logic:
     * - Ensure endpoints exist.
     * - Insert or update edge u -> v.
     * - If undirected, also insert or update v -> u.
     */
    addEdge(u, v, w) {
        //Ensure both endpoints exist
        this.addNode(u);
        this.addNode(v);

        //Neighbors list for u
        const listU = this.adj.get(u);

        //Try to update existing edge (u -> v)
        let updated = false;
        for (let i = 0; i < listU.length; i++) {
            if (listU[i].to === v) {
                listU[i].weight = w; //Update weight
                updated = true;
                break;
            }
        }
        //If not found, append new edge
        if (!updated) {
            listU.push({ to: v, weight: w });
        }

        //If undirected, mirror edge v -> u
        if (!this.directed) {
            const listV = this.adj.get(v);
            let updated2 = false;
            for (let j = 0; j < listV.length; j++) {
                if (listV[j].to === u) {
                    listV[j].weight = w;
                    updated2 = true;
                    break;
                }
            }
            if (!updated2) {
                listV.push({ to: u, weight: w });
            }
        }
    }

    /**
     * Method to Get All Nodes in the Graph
     * @returns {Array<string|number>} Array of node labels
     */
    nodes() {
        //Return node labels as an array
        return Array.from(this.adj.keys());
    }

    /**
     * Method to Get Neighbors of a Node
     * @param {string|number} u - Node label
     * @returns {Array<{to: string|number, weight: number}>} Neighbor list
     */
    neighbors(u) {
        //Return neighbors if present, else empty array
        if (this.adj.has(u)) {
            return this.adj.get(u);
        }
        return [];
    }

    /**
     * Method to Compute Shortest Paths from a Source Using Dijkstra
     * @param {string|number} source - Starting node label
     * @returns {{ dist: Map<any, number>, prev: Map<any, any|null> }}
     *          dist: node -> shortest distance from source
     *          prev: node -> predecessor on shortest path (or null)
     *
     * Logic:
     * - Initialize dist with Infinity and prev with null for all nodes.
     * - Set dist[source] = 0 and push into MinHeap.
     * - While heap not empty:
     *   - Pop node with smallest tentative distance.
     *   - If entry is stale (distance mismatch), skip.
     *   - For each neighbor (u -> v, w):
     *     - alt = dist[u] + w; if alt < dist[v], relax and push (v, alt).
     */
    shortestPaths(source) {
        //Distance and predecessor maps
        const dist = new Map();
        const prev = new Map();

        //Initialize all known nodes
        const allNodes = this.nodes();
        for (let i = 0; i < allNodes.length; i++) {
            const node = allNodes[i];
            dist.set(node, Infinity);
            prev.set(node, null);
        }

        //If source is unknown, add it as an isolated node
        if (!this.adj.has(source)) {
            this.addNode(source);
            dist.set(source, Infinity);
            prev.set(source, null);
        }

        //Distance to source is zero
        dist.set(source, 0);

        //Create a MinHeap ordering by smallest 'd'
        const heap = new MinHeap((a, b) => a.d - b.d);

        //Push initial source entry
        heap.push({ node: source, d: 0 });

        //Process elements until heap is exhausted
        while (heap.size() > 0) {
            //Extract node with smallest tentative distance
            const entry = heap.pop();
            const u = entry.node;
            const d = entry.d;

            //Skip stale entries (if a better distance was found later)
            if (d !== dist.get(u)) {
                continue;
            }

            //Iterate through neighbors of u
            const nbrs = this.neighbors(u);
            for (let i = 0; i < nbrs.length; i++) {
                const edge = nbrs[i];
                const v = edge.to;
                const w = edge.weight;

                //Compute candidate distance via u
                const alt = dist.get(u) + w;

                //Relaxation: if new path is shorter, update and push
                if (alt < (dist.get(v) ?? Infinity)) {
                    dist.set(v, alt); //Update shortest distance to v
                    prev.set(v, u);   //Record predecessor
                    heap.push({ node: v, d: alt }); //Push new tentative distance
                }
            }
        }

        //Return full distance and predecessor maps
        return { dist, prev };
    }

    /**
     * Method to Reconstruct the Shortest Path from Source to Target
     * @param {Map<any, any|null>} prev - Predecessor map from shortestPaths()
     * @param {string|number} target - Destination node label
     * @returns {Array<string|number>} Node sequence from source to target (empty if unreachable)
     *
     * Logic:
     * - Start at target, follow prev pointers backward until null.
     * - Reverse the sequence to get source -> ... -> target.
     */
    reconstructPath(prev, target) {
        //Collect nodes in reverse (target back to source)
        const path = [];
        let cur = target;

        //Follow predecessors as long as entries exist
        while (cur !== null && prev.has(cur)) {
            path.push(cur);
            cur = prev.get(cur);
        }

        //Reverse to obtain forward direction
        path.reverse();

        //Return path (empty if target unknown/unreached)
        return path;
    }

    /**
     * Method to Get the Single-Source Shortest Path to a Target
     * @param {string|number} source - Starting node label
     * @param {string|number} target - Destination node label
     * @returns {{ distance: number, path: Array<string|number> }}
     *
     * Logic:
     * - Run Dijkstra from the source to compute dist/prev.
     * - If dist[target] is Infinity, target is unreachable (return distance=Infinity and empty path).
     * - Otherwise reconstruct the path and return.
     */
    shortestPathTo(source, target) {
        //Run Dijkstra to get distances and predecessors
        const { dist, prev } = this.shortestPaths(source);

        //Retrieve best-known distance to target
        const distance = dist.has(target) ? dist.get(target) : Infinity;

        //Reconstruct path if reachable; else empty
        let path;
        if (Number.isFinite(distance)) {
            path = this.reconstructPath(prev, target);
        } else {
            path = [];
        }

        //Return both distance and path
        return { distance, path };
    }
}
