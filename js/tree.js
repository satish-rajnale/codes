function Node(data){
    this.data = data;
    this.children = [];
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(data, toNodeData){
        const node  = new Node(data);
        const parent = toNodeData ? this.findBFS(toNodeData) : null;

        if(parent) {
            parent.children.push(node)
        }
        else{
            if(!this.root){
                this.root = node;
            }
            else {
                return "Tried to add node at root while root already exists"
            }
        }
    }

    findBFS(data){
        const queue =[this.root];
        let _node = null;

        this.traverseBFS((node) => {
            if(node.data == data){
                _node = node
            }
        })

        return _node;
    }

    traverseBFS(callback) {
        const queue = [this.root];

        if(callback){
            while(queue.length){
                const node  = queue.shift();

                callback(node)

                for(const child of node.children){
                    queue.push(child)
                }
            }
        }
    }
}

(function test(){
    let tree = new  Tree();

    tree.add("node1")
    tree.add("node2", "node1")
    tree.add("node3", "node1")
    tree.add("node4", "node2")
    tree.add("node5", "node2")
    tree.add("node6", "node3")

    tree.traverseBFS((node) => console.log("current node", node))
})()


// output
// current node Node {
//     data: 'node1',
//     children: [
//       Node { data: 'node2', children: [Array] },
//       Node { data: 'node3', children: [Array] } 
//     ]
//   }
//   current node Node {
//     data: 'node2',
//     children: [
//       Node { data: 'node4', children: [] },     
//       Node { data: 'node5', children: [] }      
//     ]
//   }
//   current node Node {
//     data: 'node3',
//     children: [ Node { data: 'node6', children: [] } ]
//   }
//   current node Node { data: 'node4', children: [] }
//   current node Node { data: 'node5', children: [] }
//   current node Node { data: 'node6', children: [] }