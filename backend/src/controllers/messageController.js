const Dev = require('../models/user');
const Message = require('../models/message');

module.exports = {
    async index(req, res) {
        const { devId: targetUser } = req.params;
        const { user: loggedUser } = req.headers;

        const messages = await Message.find({
            $and: [{ from: loggedUser }, { to: targetUser }],
        }, ['message', 'createdAt'], ).sort('createdAt');

        return res.json({ from: loggedUser, to: targetUser, messages });
    },
    async store(req, res) {
        const { from, to, message } = req.body;

        const msg = Message.create({
            from,
            to,
            message,
        });

        return res.json(msg);
    },
};