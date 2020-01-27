//@flow

function Node(val, left, right, parent) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.parent = parent;
  this.color = 'red';
}

function insert(tree, node) {
  let parent = tree;
  while (tree) {
    parent = tree;
    if (node.val < tree.val) {
      tree = tree.left;
      if (!tree) {
        parent.left = node;
      }
    } else {
      tree = tree.right;
      if (!tree) {
        parent.right = node;
      }
    }
  }
  node.parent = parent;
  order(tree, node);
}

function order(tree, node) {
  if (node.parent && node.parent.parent && node.parent.parent.left === node.parent) {
    const uncle = node.parent.parent.right;
    if (uncle.color === 'red') {
      caseRedUncle(node, uncle);
      order(tree, node.parent);
    } else {

    }
  } else if (node.parent && node.parent.parent && node.parent.parent.right === node.parent) {
    const uncle = node.parent.parent.left;
    if (uncle.color === 'red') {
      caseRedUncle(node, uncle);
      order(tree, node.parent);
    }
  }
  tree.color = 'black'; //case 0
}

function caseRedUncle(node, uncle) {
  uncle.color = 'black';
  node.parent.color = 'black';
  node.parent.parent.color = 'red';
}
