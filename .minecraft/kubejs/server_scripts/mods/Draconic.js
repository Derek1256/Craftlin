ServerEvents.recipes(craftlin => {
    craftlin.shaped(Item.of('craftlin:draconium_core', 1), ['ABA', 'BCB', 'ABA'], { A: 'craftlin:draconium_ingot', B: 'minecraft:gold_ingot', C: 'minecraft:diamond' }).id('craftlin:crafting/draconium_core')
    craftlin.shaped(Item.of('craftlin:wyvern_core', 1), ['ABA', 'BCB', 'ABA'], { A: 'craftlin:draconium_ingot', B: 'craftlin:draconium_core', C: 'minecraft:nether_star' }).id('craftlin:crafting/wyvern_core')

})