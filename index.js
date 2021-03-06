// Import stylesheets
import './style.css';

// Write Javascript code!
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertBST(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  insertBT(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      let q = [];
      q.push(currentNode);
      while (q.length) {
        //Left
        let current = q.shift();
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          q.push(current.left);
        }
        if (!current.right) {
          //Right
          current.right = newNode;
          return this;
        } else {
          q.push(current.right);
        }
      }
    }
  }

  bFS(q, list) {
    if(!q.length){
      return list;
    }
    let currentNode = q.shift();
    //if (currentNode.value.amount) {
      list.push(currentNode.value);

   // }
    if(currentNode.left) {
      q.push(currentNode.left);
    }
    if(currentNode.right) {
      q.push(currentNode.right);
    }
    return this.bFS(q, list);
  }

  lookup(value) {
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insertBT(11);
tree.insertBT(4);
tree.insertBT(6);
tree.insertBT(13);
tree.insertBT({"amount": 10000});
tree.insertBT(12);
tree.insertBT(1);
tree.insertBT(2);
tree.insertBT(3);
tree.insertBT(5);
tree.insertBT(7);
tree.insertBT(8);
tree.insertBT(9);
tree.insertBT(10);

//tree.insertBT(1)
console.log(traverse(tree.root));
let a = tree.bFS([tree.root], []);
console.log("BFS", a);
//     9
//  4     10
//1  6  15  11
//            12

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function diameterOfBinaryTree(root) {
  var max = -Infinity;
  function cal(root){
    if(!root){
      return 0;
    }
    const [left, right] = [cal(root.left), cal(root.right)];
    max = Math.max(max, left+right)
    return 1+Math.max(left,right)
  }
  cal(root);
  return max;
    
};

class Solution {
  result = 0;
  longestConsecutive(root) {
    if (root == null) {
      return 0;
    }
    this.result = 0;
    this.lc(root);
    console.log(this.result);
    return this.result;
  }

  lc(node) {
    console.log('Node value ', node);
    if (node == null) {
      return 0;
    }
    let left = this.lc(node.left);
    let right = this.lc(node.right);
    let max = 1;
    if (node.left == null || node.left.value == node.value + 1) {
      max = Math.max(left + 1, max);
    }
    if (node.right == null || node.right.value == node.value + 1) {
      max = Math.max(right + 1, max);
    }
    this.result = Math.max(this.result, max); //1
    return max;
  }
}
const newTree = new Solution();
newTree.longestConsecutive(tree.root);
