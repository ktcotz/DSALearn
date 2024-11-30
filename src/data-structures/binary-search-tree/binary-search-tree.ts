export class BinarySearchTreeNode<T> {
  constructor(
    public value: T,
    public left: BinarySearchTreeNode<T> | null = null,
    public right: BinarySearchTreeNode<T> | null = null
  ) {}
}

export class BinarySearchTree<T> {
  constructor(public root: BinarySearchTreeNode<T> | null = null) {}

  insert(value: T) {
    const newNode = new BinarySearchTreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }

      if (current.value < value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      }
    }
  }

  get(value: T) {
    if (!this.root) return null;

    let current = this.root;

    if (current === value) return current;

    while (true) {
      if (value === current.value) {
        return value;
      }

      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return null;
        }
      }

      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          return null;
        }
      }
    }
  }

  BFS() {
    if (!this.root) return null;

    const queue: BinarySearchTreeNode<T>[] = [];
    const visited: BinarySearchTreeNode<T>[] = [];
    let node = this.root;

    queue.push(node);

    while (queue.length > 0) {
      let current = queue.shift();

      if (current) {
        node = current;
      }

      visited.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  DFSPreOrder() {
    if (!this.root) return null;
    const visited: BinarySearchTreeNode<T>[] = [];

    let current = this.root;

    const cb = (node: BinarySearchTreeNode<T>) => {
      if (!node) return;

      visited.push(node);
      if (node.left) cb(node.left);
      if (node.right) cb(node.right);
    };

    cb(current);

    return visited;
  }

  DFSPostOrder() {
    if (!this.root) return null;
    const visited: BinarySearchTreeNode<T>[] = [];

    let current = this.root;

    const cb = (node: BinarySearchTreeNode<T>) => {
      if (!node) return;

      if (node.left) cb(node.left);
      if (node.right) cb(node.right);
      visited.push(node);
    };

    cb(current);

    return visited;
  }

  DFSInOrder() {
    if (!this.root) return null;
    const visited: BinarySearchTreeNode<T>[] = [];

    let current = this.root;

    const cb = (node: BinarySearchTreeNode<T>) => {
      if (!node) return;

      if (node.left) cb(node.left);
      visited.push(node);
      if (node.right) cb(node.right);
    };

    cb(current);

    return visited;
  }
}
