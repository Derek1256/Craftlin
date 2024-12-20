//priority 20
console.log('Initlizating Recipe Removal.js!')
const removerecipebyid = [
    'mysticalagriculture:machine_frame',
    'mysticalagriculture:soulium_spawner',
    'mekanism:reaction/coal_gasification/dusts_coals',
    'mekanism:reaction/coal_gasification/blocks_coals',
    'mekanism:reaction/coal_gasification/coals',
    'mekanismgenerators:generator/gas_burning',
    'pylons:infusion_pylon',
    'pylons:potion_filter',
    'justdirethings:creaturecatcher',
    'enderio:silicon',
    'refinedstorage:silicon',
    'mekanism_extras:absolute_logistical_transporter', 
    'mekanism_extras:supreme_logistical_transporter', 
    'mekanism_extras:infinite_logistical_transporter', 
    'mekanism_extras:absolute_thermodynamic_conductor', 
    'mekanism_extras:supreme_thermodynamic_conductor', 
    'mekanism_extras:cosmic_thermodynamic_conductor', 
    'mekanism_extras:infinite_thermodynamic_conductor', 
    'mekanism_extras:infinite_pressurized_tube', 
    'mekanism_extras:cosmic_pressurized_tube', 
    'mekanism_extras:supreme_pressurized_tube', 
    'mekanism_extras:absolute_pressurized_tube', 
    'mekanism_extras:infinite_mechanical_pipe', 
    'mekanism_extras:cosmic_mechanical_pipe', 
    'mekanism_extras:supreme_mechanical_pipe', 
    'mekanism_extras:absolute_mechanical_pipe', 
    'mekanism_extras:infinite_induction_provider', 
    'mekanism_extras:infinite_induction_cell', 
    'mekanism_extras:infinite_tier_installer', 
    'mekanism_extras:cosmic_tier_installer', 
    'mekanism_extras:supreme_tier_installer', 
    'mekanism_extras:absolute_tier_installer',
    'advanced_ae:quantum_helmet',
    'advanced_ae:quantum_chest',
    'advanced_ae:quantum_leggings',
    'advanced_ae:quantum_boots',
    'advanced_ae:quantum_helmet_item_reset',
    'advanced_ae:quantum_chestplate_item_reset',
    'advanced_ae:quantum_leggings_item_reset',
    'advanced_ae:quantum_boots_item_reset',
    'modular_machinery_reborn:modularium',
    'mekanism:control_circuit/infused_advanced',
    'mekanism:control_circuit/infused_elite',
    'mekanism:control_circuit/infused_ultimate'
]
ServerEvents.recipes(craftlin => {
    removerecipebyid.forEach((recipe) => {
        craftlin.remove({ id: recipe })
    })
})
console.log('Recipe Removal.js is loaded!')