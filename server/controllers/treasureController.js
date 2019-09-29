module.exports = {
    dragonTreasure: async (req, res) => {
        const db = req.app.get('db')
        const result  = await db.get_dragon_treasure(1)
        return res.status(200).send(result)
    },
    // below is a condensed version of the one I did, bit ways work though
    // module.exports = {
    //     dragonTreasure: async (req, res) => {
    //       const treasure = await req.app.get('db').get_dragon_treasure(1);
    //       return res.status(200).send(treasure);
    //     },
    //   };
}