/**
 * Created by Joel Palmer on 6/16/2015.
 */
//JavaScript BST

function JSBSTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    this.insert = function (key) {
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.inOrderTraverse = function (visitor) {
        inOrderTraverseNode(root, visitor); //visitor callback
    };

    var inOrderTraverseNode = function (node, visitor) {
        if (node !== null) {
            inOrderTraverseNode(node.left, visitor);
            visitor(node.key);
            inOrderTraverseNode(node.right, visitor);
        }
    };

    this.preOrderTraverse = function (visitor) {
        preOrderTraverseNode(root, visitor);
    };

    var preOrderTraverseNode = function (node, visitor) {
        if (node !== null) {
            visitor(node.key);
            preOrderTraverseNode(node.left, visitor);
            preOrderTraverseNode(node.right, visitor);
        }
    };

    this.postOrderTraverse = function (visitor) {
        postOrderTraverseNode(root, visitor);
    };

    var postOrderTraverseNode = function (node, visitor) {
        if (node !== null) {
            postOrderTraverseNode(node.left, visitor);
            postOrderTraverseNode(node.right, visitor);
            visitor(node.key);
        }
    };

    this.min = function () {
        return minNode(root);
    };

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    this.max = function () {
        return maxNode(root);
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }

            return node.key;
        }
        return null;
    };

    this.lookup = function (key) {
        return lookupNode(root, key);
    };

    var lookupNode = function (node, key) {

        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return lookupNode(node.left, key);

        } else if (key > node.key) {
            return lookupNode(node.right, key);

        } else {
            return true;
        }
    };

    this.remove = function (key) {
        root = removeNode(root, key);
    };

    var removeNode = function (node, key) {

        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;

        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;

        } else {

            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;

            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };

    var findMinNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    };


}