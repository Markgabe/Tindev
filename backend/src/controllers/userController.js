const Dev = require('../models/user');
const axios = require('axios');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        loggedUser = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } },
            ],
        });

        return res.json(users);
    },

    async store(req, res) {
        let { user } = req.body;

        user = user.toLowerCase();

        const userExists = await Dev.findOne({ user });
        if (userExists) return res.json(userExists);

        const response = await axios.get(
            `https://api.github.com/users/${user}`,
        );
        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            user,
            name,
            bio,
            avatar,
        });

        return res.json(dev);
    },
};