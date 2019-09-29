module.exports = {
    dragonTreasure: async (req, res) => {
        const db = req.app.get('db')
        const result  = await db.get_dragon_treasure(1)
        return res.status(200).send(result)
    },
    // below is a condensed version of the one I did, bit ways work though
     //     dragonTreasure: async (req, res) => {
    //       const treasure = await req.app.get('db').get_dragon_treasure(1);
    //       return res.status(200).send(treasure);
    //     },
    //   };

    getUserTreasure: async (req, res) => {
        const treasure = await req.app.get('db').get_user_treasure(req.session.user.id)
        return res.status(200).send(treasure)
    }
}