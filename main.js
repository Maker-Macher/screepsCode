/*Import all the modules that are required*/

var roleHarvester = require("role.harvester")
var roleUpgrader = require("role.upgrader")
var roleBuilder = require("role.builder")
var spawner = require("base.Spawn")

const maxBots = 2
const base = Game.spawns["Spawn1"]


module.exports.loop = function(){
    
    for(const i in Game.creeps){    //runs the apporpiate module for each creep in the game based on "roles" that are stored in that specific creep
        
        var creep = Game.creeps[i]
        
        if(creep.memory.role == "harvester"){
            roleHarvester.run(creep)
        }
        if(creep.memory.role == "upgrader"){
            roleUpgrader.run(creep)
        }
        if(creep.memory.role == "builder"){
            roleBuilder.run(creep)
        }

    }
    
    //Spawn bots if there are < maxBots present
    
    var upgrader = []
    var harvester = []
    var builder = []
    
    for(const i in Game.creeps){    //counts how many creeps of each role there are and puts them in the array defined above
        if(Game.creeps[i].memory.role == "harvester"){
            harvester.push(Game.creeps[i])
        }
        
        if(Game.creeps[i].memory.role == "upgrader"){
            upgrader.push(Game.creeps[i])
        }
        
        if(Game.creeps[i].memory.role == "builder"){
            builder.push(Game.creeps[i])
        }
    }
    
    if(harvester.length < maxBots){     //"harvester.length" basically counts all objects in the array, if there are 2 creeps with the harvester role, the "length" of the array is 2
        
        for(var i = 0; i < maxBots; i++){
            
            spawner.run("Harvester"+i,"harvester","Spawn1")
        }
    }
    
    if(upgrader.length < maxBots){
        
        for(var i = 0; i < maxBots; i++){
            
            spawner.run("Upgrader"+i,"upgrader","Spawn1")
        }
    }
    
    if(builder.length < maxBots){
        
        for(var i = 0; i < maxBots; i++){
            
            spawner.run("Builder"+i,"builder","Spawn1")
        }
    }
    
}