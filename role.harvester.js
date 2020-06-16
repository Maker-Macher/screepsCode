/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.Harvester');
 * mod.thing == 'a thing'; // true
 */

//role for all harvesters

var roleHarvester = {
    
    run: function(creep){
        
        const idleSort = Game.flags["IdleSpot"]
        
        var closestSources = creep.pos.findClosestByPath(FIND_SOURCES)      //finds closest resource
        var base = Game.spawns["Spawn1"]        //defines the base in a variable because otherwise it would get very complicated later on
        var extensions = Game.spawns['Spawn1'].room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_EXTENSION }})     //gets all extensions and puts them in a variable

        if(creep.store.getFreeCapacity() > 1) {
            
            if(creep.harvest(closestSources) == ERR_NOT_IN_RANGE) {     //if the creep has space, it mines energy
            
                creep.moveTo(closestSources)
            }
        }
            
        else if(base.store[RESOURCE_ENERGY] == 300){     //otherwise checks if base is full (capacity of 300), if it is
            
            for(i in extensions){       //go through every extension
            
                if(extensions[i].store[RESOURCE_ENERGY] < 50){      //and if they are not full (capacity under 50)
                
                    if(creep.transfer(extensions[i], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){     //transfer the energy to it
                    
                        creep.moveTo(extensions[i])
                    }
                }
            }
        }
        
        else if(creep.transfer(base, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {     //otherwise transfer it to the base
        
            creep.moveTo(base)
        }
        
        else{
            
            creep.moveTo(idleSpot)
        }
    }
}

module.exports = roleHarvester