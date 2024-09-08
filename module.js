class Raycast {
    origin(origin) {
        this.origin = origin;
        return this;
    }

    //Creates a new Ray using the provided target
    target(point, distance = 5000) {
        if(this.origin === undefined) {throw Error("no origin set");}
        this.target = point;
        this.ray = new Ray(this.origin,this.target,distance);
        return this;
    }

    //Shifts the ray by a degree angle, and optionally a distance
    shiftAngle(offset,distance = null) {
        if(this.ray === undefined) {throw Error("no ray to shift");}
        offset = offset * Math.PI / 180;    
        this.ray = this.ray.shiftAngle(offset,distance);
        return this;
    }

    //returns the hit point of the ray agains the closest wall.
    hit() {
        if(this.ray === undefined) {throw Error("no ray");}
        const walls = Array.from(canvas.scene.walls);

        let intersect;
        walls.forEach((wall) => {
            const wallIntersect = this.ray.intersectSegment(wall.c);
            if(wallIntersect != null) {
                intersect = wallIntersect;
            }
        });
        return intersect;
    }
}

Hooks.on("init",()=> {
    globalThis.Raycast = Raycast;
});


