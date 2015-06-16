/**
 * Created by Joel Palmer on 6/16/2015.
 */
function JSGraph() {

    var vertices = [];
    var adjList = new JSMap();

    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);

    }

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);

    };

    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            var adjacent = adjList.get(vertices[i]);
            for (var j = 0; j < adjacent.length; j++) {
                s += adjacent[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };
}
//TODO: Graph traversing