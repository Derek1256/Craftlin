ServerEvents.recipes(craftlin => { 
    craftlin.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
          {
            "count": 2,
            "tag": "pneumaticcraft:wiring"
          },
          {
            "count": 1,
            "tag": "c:slimeballs"
          },
          {
            "count": 1,
            "item": "pneumaticcraft:plastic"
          },
          {
            "count": 2,
            "item": "enderio:double_layer_capacitor"
          }
        ],
        "pressure": 1.0,
        "results": [
          {
            "count": 1,
            "id": "pneumaticcraft:capacitor"
          }
        ]
      })
})