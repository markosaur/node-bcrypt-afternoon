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
    },

    addUserTreasure: async (req, res) => {
        const { treasureURL } = req.body;
        const { id } = req.session.user;
        const userTreasure = await req.app.get('db').add_user_treasure([treasureURL, id]);
        return res.status(200).send(userTreasure);
      },
    getAllTreasure: async (req,res) => {
        const result = await req.app.get('db').get_all_treasure()
        return res.status(200).send(result)
    }
}