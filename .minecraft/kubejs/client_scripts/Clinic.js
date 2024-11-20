console.log('Initializing Client script: Clinic.js!')
ItemEvents.modifyTooltips(craftlin => {
    craftlin.add('ae2:singularity', "§cExtendedAE's Void cell inside a ME IO Port is very good for this when filtered to cobble + infinity cobble cell.")
    craftlin.add([
        'mysticalagriculture:entro_crystal_essence', 
        'mysticalagriculture:entro_crystal_seeds', 
        'mysticalagriculture:xychorium_seeds', 
        'mysticalagriculture:xychorium_essence'], "§9Added by: Developer: §dDerek")
    craftlin.add('#craftlin:tooltip_colored', "§aCan be any color!") // Go to server_scripts/tags/tooltip_colored.js to edit this tag.
    craftlin.add('craftlin:mine_casing_tier_1', 'The most basic tier of mine casing, can only starter vanilla ores Processing time: 7200 ticks')
    craftlin.add('craftlin:mine_casing_tier_2', 'Getting more Advanced now, can get all vanilla ores + basic modding ores Processing time: 5600 ticks')
    craftlin.add('craftlin:mine_casing_tier_3', 'I see you now, can get all vanilla + AllTheOres ores. Processing time: 4800 Ticks')
    craftlin.add('craftlin:mine_casing_tier_4', 'Was that not good enough? well with this tier you can get every MI ore. (nothing else) Processing time: 4000 Ticks')
    craftlin.add('craftlin:mine_casing_tier_5', 'Ok man thats enough, Every useful ore, from here on out there is only a speed boost. Processing time: 3200 Ticks')
    craftlin.add('craftlin:mine_casing_tier_6', 'Processing time: 2400 Ticks')
    craftlin.add('craftlin:mine_casing_tier_7', 'Processing time: 2000 Ticks')
    craftlin.add('craftlin:mine_casing_tier_8', 'Processing time: 640 Ticks')
    craftlin.add('craftlin:mine_casing_tier_9', 'Processing time: 320 Ticks')
    craftlin.add('craftlin:mine_casing_tier_10', 'Processing time: 80 Ticks')

})
 RecipeViewerEvents.removeEntries('item', craftlin => {
    craftlin.remove('#craftlin:hidejei') // Go to server_scripts/tags/hidejei.js to hide items from JEI. (This is being slowly retired for JEIs native item removal.)
 })
console.log('Clinic.js has been loaded!')