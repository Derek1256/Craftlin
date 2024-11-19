ServerEvents.recipes(craftlin => {
    console.log('Initializing Minecraft.js!')
    craftlin.shaped(Item.of('minecraft:chest', 4), ['LLL', 'L L', 'LLL'], 
    {
        L: '#minecraft:logs'
    })
    console.log('Minecraft.js has loaded!')
})