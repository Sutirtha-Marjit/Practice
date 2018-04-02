import Story from './util/story';
class StoryBuilding{

    constructor(len){
        this.stories = [];
        this.id = (Math.random()+'').replace('.','idx');

        for(let a=0;a<len;a++){

        }

        console.log(this);
    }

}

var building = new StoryBuilding(10);