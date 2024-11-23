console.log('Initlizating Just Dire Things.js!')
ServerEvents.recipes(craftlin => {
    craftlin.shaped(Item.of('justdirethings:creaturecatcher', 1), [ 'GBG', 'BEB', 'GBG' ], 
    { G: 'allthecompressed:glass_1x', B: 'justdirethings:blazegold_ingot', E: 'minecraft:ender_pearl' })
})
console.log('Just Dire Things.js is loaded!')