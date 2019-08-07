const Dev = require('../models/user');

module.exports = {
    async store(req, res){
        const { user: loggedId } = req.headers;
        const { devId: targetId } = req.params;

        const loggedUser = await Dev.findById(loggedId);
        const targetUser = await Dev.findById(targetId);

        if (!targetUser) return res.status(404).json({ error: "user not found" });

        if (targetUser.dislikes.includes(loggedId)) console.log("it's a dismatch! haha joke");

        loggedUser.dislikes.push(targetId);
        await loggedUser.save();

        return res.json(loggedUser);
    }
}