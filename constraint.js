class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 250
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }

    display(){
        push()
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        fill(200,0,0)
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop()
    }
}