/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('base.Spawn');
 * mod.thing == 'a thing'; // true
 */

var creepSpawnUpgraded = {
    
    run: function(name,role,PART1,PART2,PART3,PART4,PART5,PART6,PART7,baseName){
        
        var creepName = name
        var creepRole = role
        var base = Game.spawns[baseName]
            
        if(base.spawnCreep([PART1,PART2,PART3,PART4,PART5,PART6,PART7], creepName,{dryRun : true}) == OK){        //checks if it can spawn the creep
        
            base.spawnCreep([PART1,PART2,PART3,PART4,PART5,PART6,PART7], creepName)
            Game.creeps[creepName].memory.role = creepRole      //puts "role" into the spawned memory so it can be assigned tasked in the main loop
        }
    }
}

module.exports = creepSpawnUpgraded