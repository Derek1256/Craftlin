Platform.mods.kubejs.name = 'Craftlin Customs'
StartupEvents.modifyCreativeTab('kubejs:tab', craftlin => {
    craftlin.displayName = Text.gold('Craftlin Customs')
    craftlin.icon = 'craftlin:creative_tab_icon'
    craftlin.removeDisplay('craftlin:creative_tab_icon')
})
StartupEvents.registry('item', craftlin => {
    craftlin.create('craftlin:creative_tab_icon').displayName('Creative Tab Icon').tooltip("..Why do you have this? lol well since you have it, check its uses").texture('craftlin:item/logo')
})

// MADE FOR CRAFTLIN.