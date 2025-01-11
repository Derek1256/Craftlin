console.log('Initializing Client script: toolin.js!')
ItemEvents.modifyTooltips(craftlin => {
    craftlin.add('ae2:singularity', [
        Text.of("§cExtendedAE's Void cell inside a ME IO Port is very good for this"),
        Text.of("§cwhen filtered to cobble + infinity cobble cell.")])
    craftlin.add("#craftlin:developer", "§9Added by: §dCraftlin")
    // Decluttering JEI
        craftlin.add('#craftlin:tooltip_colored', "§aCan be any color!") // Go to server_scripts/tags/tooltip_colored.js to add items to this tag.
        craftlin.add('#allthecompressed:1x', [Text.of("§3Can be compressed up to 9x!"), Text.of("§3The 2-9x is hidden from JEI for clutter.")])
    // Custom Miners
    craftlin.add('craftlin:mine_casing_tier_1', '§aThe most basic tier of mine casing, can only starter vanilla ores Processing time: 7200 ticks')
    craftlin.add('craftlin:mine_casing_tier_2', '§aGetting more Advanced now, can get all vanilla ores + basic modding ores Processing time: 5600 ticks')
    craftlin.add('craftlin:mine_casing_tier_3', '§aI see you now, can get all vanilla + AllTheOres ores. Processing time: 4800 Ticks')
    craftlin.add('craftlin:mine_casing_tier_4', '§aWas that not good enough? well with this tier you can get every MI ore. (nothing else) Processing time: 4000 Ticks')
    craftlin.add('craftlin:mine_casing_tier_5', '§aOk man thats enough, Every useful ore, from here on out there is only a speed boost. Processing time: 2840 Ticks')    
    craftlin.add('craftlin:mine_casing_tier_6', '§aProcessing time: 1280 Ticks')
    craftlin.add('craftlin:mine_casing_tier_7', '§aProcessing time: 640 Ticks')
    craftlin.add('craftlin:mine_casing_tier_8', '§aProcessing time: 160 Ticks')
    craftlin.add('craftlin:mine_casing_tier_9', '§aProcessing time: 80 Ticks')
    craftlin.add('craftlin:mine_casing_tier_10', '§aProcessing time: 20 Ticks')
})
console.log('Initialized Client script: toolin.js!')