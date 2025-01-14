StartupEvents.registry('block', craftlin => {

    // Draconium Block
    
    craftlin.create('craftlin:draconium_ingot_block').displayName("Draconium Block").hardness(30.0).resistance(150).requiresTool(true).fullBlock(true).texture('craftlin:block/draconium_block').soundType('metal')    
    
    // Misc Blockss


    
    // Ported GT:NH Stuff
    craftlin.create('craftlin:molecular_casing').displayName("Molecular Casing").hardness(30.0).resistance(150).requiresTool(true).fullBlock(true).texture('gtnh:block/casing/molecular_casing').stoneSoundType()
    craftlin.create('craftlin:molecular_coil').displayName("Molecular Coil").hardness(30.0).resistance(150).requiresTool(true).fullBlock(true).texture('gtnh:block/coil/molecular_coil').stoneSoundType()
    craftlin.create('craftlin:quantum_glass').displayName("Quantum Glass").hardness(30.0).resistance(150).requiresTool(true).defaultTranslucent().texture('gtnh:block/glass/quantum_glass').stoneSoundType()
















    // Miners
    craftlin.create('craftlin:mine_casing_tier_1').displayName('Mine Casing Tier 1').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_1')
    craftlin.create('craftlin:mine_casing_tier_2').displayName('Mine Casing Tier 2').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_2')
    craftlin.create('craftlin:mine_casing_tier_3').displayName('Mine Casing Tier 3').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_3')
    craftlin.create('craftlin:mine_casing_tier_4').displayName('Mine Casing Tier 4').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_4')
    craftlin.create('craftlin:mine_casing_tier_5').displayName('Mine Casing Tier 5').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_5')
    craftlin.create('craftlin:mine_casing_tier_6').displayName('Mine Casing Tier 6').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_6')
    craftlin.create('craftlin:mine_casing_tier_7').displayName('Mine Casing Tier 7').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_7')
    craftlin.create('craftlin:mine_casing_tier_8').displayName('Mine Casing Tier 8').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_8')
    craftlin.create('craftlin:mine_casing_tier_9').displayName('Mine Casing Tier 9').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_9')
    craftlin.create('craftlin:mine_casing_tier_10').displayName('Mine Casing Tier 10').hardness(20.0).resistance(100).requiresTool(true).stoneSoundType().fullBlock(true).texture('craftlin:block/miner_tier_10')
})