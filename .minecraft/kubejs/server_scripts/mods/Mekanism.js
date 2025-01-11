console.log('Initializing Mekanism.js!')
ServerEvents.recipes(craftlin => {
    
    craftlin.shaped(Item.of('mekanismgenerators:gas_burning_generator', 1), ['OAO', 'SCS', 'OAO'], 
    {
        O: 'alltheores:osmium_ingot',
        A: 'mekanism:ultimate_control_circuit',
        S: 'mekanism:steel_casing',
        C: 'mekanism:electrolytic_core'

    }).id('craftlin:mekanism/gas_burning_generator')
    
    // Crushers
    
    let crusher = craftlin.recipes.mekanism.crushing
    
    crusher('extendedae:entro_dust', 'extendedae:entro_crystal').id('craftlin:mekanism/crusher/entro_crystal')
    crusher('modern_industrialization:silicon_dust', '#c:silicon').id('craftlin:mekanism/crusher/silicon_dust')

    // Combining

    let combine = craftlin.recipes.mekanism.combining

    combine('craftlin:quantum_steel', 'alltheores:steel_ingot', 'advanced_ae:quantum_alloy').id('craftlin:mekanism/combining/quantum_steel')
    
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