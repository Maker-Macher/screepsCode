/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('base.Spawn');
 * mod.thing == 'a thing'; // true
 */

var creepSpawn = {
    
    run: function(name,role,baseName){
        
        var creepName = name
        var creepRole = role
        var base = Game.spawns[baseName]
            
        if(base.store[RESOURCE_ENERGY] > 200){      //if base has enough energy to spawn a creep (requires 200 energy for a simple creep)
            
            if(base.spawnCreep([WORK, CARRY, MOVE], creepName) != ERR_BUSY){        //"ERR_BUSY" is returned when the base is already spawning a creep, but for some reason its not really working how I want it to, but it still works since this code is executed everytime there are less bots than required
                
                base.spawnCreep([WORK, CARRY, MOVE], creepName)
                Game.creeps[creepName].memory.role = creepRole      //puts "role" into the spawned memory so it can be assigned tasked in the main loop
            }
        }
    }
    
}

module.exports = creepSpawn