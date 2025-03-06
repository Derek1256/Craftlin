console.log('Initlizating rftools.js!')
ServerEvents.recipes(craftlin => {
craftlin.shaped(Item.of('rftoolsbuilder:builder', 1), ['ABA', 'CDC', 'AEA'], { A: 'rftoolsbase:dimensionalshard', B: 'minecraft:nether_star', C: 'immersiveengineering:circuit_board', D: 'rftoolsbase:machine_frame', E: 'mekanism:elite_energy_cube' })


})
console.log('rftools.js is loaded!')