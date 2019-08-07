const Dev = require('../models/user');

module.exports = {
    async store(req, res){
        const { user: loggedId } = req.headers;
        const { devId: targetId } = req.params;

        const loggedUser = await Dev.findById(loggedId);
        const targetUser = await Dev.findById(targetId);

        if (!targetUser) return res.status(404).json({ error: "user not found" });

        if (targetUser.likes.includes(loggedId)){
            loggedUser.matches.push(targetId);
            targetUser.matches.push(loggedId);
            await targetUser.save();
        }

        loggedUser.likes.push(targetId);
        await loggedUser.save();

        return res.json(loggedUser);
    }
}