/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.builder');
 * mod.thing == 'a thing'; // true
 */

 //role for all "builder" creeps / bots

var roleBuilder = {
    
    run: function(creep){
        
        const idleSpot = Game.flags["IdleSpot"]
        
        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0){
            
            creep.memory.building = false       //if the creep is building something AND its stored energy is 0, set building to false
        }
            
        if(!creep.memory.building && creep.store.getFreeCapacity() == 0){
            
            creep.memory.building = true        //if the creep is not building anything AND it has no more space for more capacity, set building to true
        }
        
        if(creep.memory.building) {         //if building is true
            
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES)      //find construction sites (array)
            
            if(targets.length){         //if there are no construction sites, then it returns false since the "length" is 0
                
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE){        //if the target is not in range
                    
                    creep.moveTo(targets[0])        //move to it
                }
            }
            
            else{
                
                creep.moveTo[idleSpot]
            }
        }
        
        else{
            
            var closestResource = creep.pos.findClosestByPath(FIND_SOURCES)     //finds the closest resource by path
            
            if(creep.harvest(closestResource) == ERR_NOT_IN_RANGE){     //and harvests its
            
                creep.moveTo(closestResource)
            }
        }
    }
}

module.exports = roleBuilder