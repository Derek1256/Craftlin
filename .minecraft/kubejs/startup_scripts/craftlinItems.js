StartupEvents.registry('item', craftlin => {
    
    // Ingots
    
    craftlin.create('craftlin:dragonic_steel_ingot').displayName('Dragonic Steel Ingot').texture('craftlin:item/ingots/dragonic_steel').tooltip('Will make sense later......').rarity('epic')
    craftlin.create('craftlin:ice_draconium_ingot').displayName('Ice Draconium Ingot').texture("craftlin:item/ingots/icesteel").rarity('rare')
    craftlin.create('craftlin:draconium_ingot').displayName('Draconium Ingot').texture('craftlin:item/ingots/draconium_dust').rarity('epic')

    // Dusts

    craftlin.create('craftlin:dragonic_steel_dust').displayName('Dragonic Steel Dust').texture('craftlin:item/dusts/dragonic_steel_dust')
    craftlin.create('craftlin:draconium_ingot_dust').displayName('Draconium Dust').texture('craftlin:item/dusts/draconium_dust').tooltip("§6Can be obtained by the Ender Dragon.")

    // Cores

    craftlin.create('craftlin:draconium_core').displayName("Draconium Core").texture('craftlin:item/draconium_core')
    craftlin.create('craftlin:wyvern_core').displayName("Wyvern Core").texture('craftlin:item/wyvern_core')
    craftlin.create('craftlin:awakened_core').displayName("Draconic Core").texture('craftlin:item/awakened_core')
    
    // Misc

    craftlin.create('craftlin:creative_tab_icon').displayName('Creative Tab Icon').tooltip("..Why do you have this? lol well since you have it, check its uses").texture('craftlin:item/logo')
    craftlin.create('craftlin:dragon_heart').displayName("§6Dragon Heart").texture('craftlin:item/dragon_heart').rarity('epic').fireResistant(true).tooltip("§bObtained by Hostile Neural Networks!")

})