/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.upgrader');
 * mod.thing == 'a thing'; // true
 */

 //role for upgrader to upgrade Room Controller

var roleUpgrader = {
    
    run: function(creep){
        
        var closestSource = creep.pos.findClosestByPath(FIND_SOURCES)       //find closest resource
        var contr = creep.room.controller       //conviniently puts the room controller in a variablem not needed, but looks cleaner
        
        if(creep.store.getUsedCapacity() == 0){       //if the creep has no used spaces (= empty), set the memory value "full" to false
            creep.memory.full = false
        }
        
        else if(creep.store.getFreeCapacity() == 0){    //if the creep has no free spaces (= full), set the memory value "full" to true
            creep.memory.full = true
        }
        
        if(creep.memory.full == false){         //if the creep is empty
            if(creep.harvest(closestSource) == ERR_NOT_IN_RANGE){       //mine energy
                creep.moveTo(closestSource)
            }
        }
        
        if(creep.memory.full == true){      //if creep is full
            if(creep.upgradeController(contr) == ERR_NOT_IN_RANGE){     //upgrade controller
                creep.moveTo(contr)
            }
        }
    }
}



module.exports = roleUpgrader