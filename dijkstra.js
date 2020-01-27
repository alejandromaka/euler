const graph = {
  s: {A: 5, B: 2},
  A: {C: 4, D: 2},
  B: {A: 8, D: 7},
  C: {D: 6, f: 3},
  D: {f: 1},
  f: {}
};

function dijkstra(start) {
  const dist = {};
  const parents = {};
  const queue = [];
  const cache = new Set();

  Object.keys(graph[start]).forEach(k => {
    dist[k] = graph[start][k];
    parents[k] = start;
    queue.push(k);
  });

  while (queue.length) {
    const node = queue.shift();
    if (cache.has(node)) {
      continue;
    }
    cache.add(node);

    let d = dist[node];
    let children = graph[node];

    for (let n in children) {
      let newCost = d + children[n];
      if (!dist[n]) {
        dist[n] = newCost;
        parents[n] = node;
      }
      if (dist[n] > newCost) {
        dist[n] = newCost;
        parents[n] = node;
      }
      queue.push(n);
    }
  }

  let last = parents.f;
  const trace = ['f'];
  while (last) {
    trace.unshift(last);
    last = parents[last];
  }
  console.log(dist.f, trace);
}
