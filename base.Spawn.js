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
            
            
        if(base.spawnCreep([WORK, CARRY, MOVE], creepName, {dryRun : true}) == OK){        //Checks if it can spawn creep, if it can, it retunrs "OK"
            
            base.spawnCreep([WORK, CARRY, MOVE], creepName)
            Game.creeps[creepName].memory.role = creepRole      //puts "role" into the spawned memory so it can be assigned tasked in the main loop
        }
    }
}

module.exports = creepSpawn