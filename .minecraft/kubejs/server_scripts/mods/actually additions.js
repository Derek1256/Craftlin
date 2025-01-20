ServerEvents.recipes(craftlin => { 
    // Capacitors
    craftlin.custom({
        "type": "actuallyadditions:empowering",
        "base": {
          "item": "minecraft:glowstone"
        },
        "color": 6522834,
        "energy": 5000,
        "modifiers": [
          {
            "item": "enderio:double_layer_capacitor"
          },
          {
            "item": "enderio:double_layer_capacitor"
          },
          {
            "item": "enderio:vibrant_alloy_ingot"
          },
          {
            "item": "enderio:vibrant_alloy_ingot"
          }
        ],
        "result": {
          "count": 1,
          "id": "enderio:octadic_capacitor"
        },
        "time": 120
      })

      craftlin.custom({
        "type": "actuallyadditions:empowering",
        "base": {
          "tag": "c:dusts/coal"
        },
        "color": 6522834,
        "energy": 5000,
        "modifiers": [
          {
            "item": "enderio:basic_capacitor"
          },
          {
            "item": "enderio:basic_capacitor"
          },
          {
            "item": "enderio:energetic_alloy_ingot"
          },
          {
            "item": "enderio:energetic_alloy_ingot"
          }
        ],
        "result": {
          "count": 1,
          "id": "enderio:double_layer_capacitor"
        },
        "time": 120
      })
})