class rectangle{
    constructor(length, height){
        this.length = length;
        this.height = height;
    }

    setLength(length){
        this.length = length;
    }

    getLength(length){
        return this.length;
    }

    setHeight(height){
        this.height = height;
    }

    getHeight(height){
        return this.height;
    }

    computeArea(){
        return this.getLength() * this.getHeight();
    }
}

let area = new rectangle();
area.setLength (10);
area.setHeight (5);
area.computeArea();