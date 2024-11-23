Platform.mods.kubejs.name = 'Craftlin Customs'
StartupEvents.modifyCreativeTab('kubejs:tab', craftlin => {
    craftlin.displayName = Text.gold('Craftlin Customs');
    craftlin.icon = 'craftlin:creative_tab_icon'
})
StartupEvents.registry('item', craftlin => {
    craftlin.create('craftlin:creative_tab_icon').displayName('Creative Tab Icon').tooltip("..Why do you have this? lol well since you have it, check its uses").texture('craftlin:item/logo')
    craftlin.create('extendedae:me_infinity_lava_cell', 'custom_infinity_cell').fluidType('minecraft:lava').texture('craftlin:item/infinity_cell_lava')
})
StartupEvents.registry('block', craftlin => {
    craftlin.create('craftlin:mine_casing_tier_1').displayName('Mine Casing Tier 1').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_2').displayName('Mine Casing Tier 2').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_3').displayName('Mine Casing Tier 3').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_4').displayName('Mine Casing Tier 4').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_5').displayName('Mine Casing Tier 5').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_6').displayName('Mine Casing Tier 6').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_7').displayName('Mine Casing Tier 7').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_8').displayName('Mine Casing Tier 8').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_9').displayName('Mine Casing Tier 9').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
    craftlin.create('craftlin:mine_casing_tier_10').displayName('Mine Casing Tier 10').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true)
})
// MADE FOR CRAFTLIN.