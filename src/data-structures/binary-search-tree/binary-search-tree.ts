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
}
