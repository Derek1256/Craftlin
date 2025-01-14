console.log('Initializing Mekanism.js!')
ServerEvents.recipes(craftlin => {
    
    craftlin.shaped(Item.of('mekanismgenerators:gas_burning_generator', 1), ['OAO', 'SCS', 'OAO'], { 
        O: 'alltheores:osmium_ingot', 
        A: 'mekanism:ultimate_control_circuit', 
        S: 'mekanism:steel_casing', 
        C: 'mekanism:electrolytic_core' }).id('craftlin:mekanism/gas_burning_generator')

    craftlin.shaped(Item.of('mekanismgenerators:fusion_reactor_frame', 4), ['ABA', 'BCB', 'ABA'], { 
        A: 'craftlin:ice_draconium_ingot', 
        B: 'mekanism:pellet_polonium', 
        C: 'powah:reactor_nitro' }).id('craftlin:mekanism/fusion_reactor_frame')
        
    // Crushers
    
    let crusher = craftlin.recipes.mekanism.crushing
    
    crusher('extendedae:entro_dust', 'extendedae:entro_crystal').id('craftlin:mekanism/crusher/entro_crystal')
    crusher('modern_industrialization:silicon_dust', '#c:silicon').id('craftlin:mekanism/crusher/silicon_dust')
    crusher('craftlin:dragonic_steel_dust', 'craftlin:dragonic_steel_ingot').id('craftlin:mekanism/crusher/dragonic_steel_dust')
    crusher('craftlin:draconium_ingot_dust', 'craftlin:draconium_ingot').id('craftlin:mekanism/crussher/draconium_ingot_dust')

    // Combining

    let combine = craftlin.recipes.mekanism.combining

 // Old Recipe   combine('craftlin:dragonic_steel', 'alltheores:steel_ingot', 'advanced_ae:quantum_alloy').id('craftlin:mekanism/combining/dragonic_steel')
    
    // Enriching
    
    craftlin.custom({
        "type": "mekanism:enriching",
        "input": {
            "count": 1,
            "tag": "c:ores/black_quartz"
        },
        "output": {
            "count": 4,
            "id": "actuallyadditions:black_quartz"
        }
    })
})
console.log('Initialized Mekanism.js!')