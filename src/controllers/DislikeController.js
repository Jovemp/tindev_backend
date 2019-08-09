const Dev = require('../models/dev');

module.exports = {
    async store(req, res) {
        const devId = req.params.devId;
        const userId = req.headers.userid;

        const loggedDev = await Dev.findById(userId);
        const targetDev = await Dev.findById(devId);

        console.log(devId);

        if (!targetDev){
            return res.status(400).json({error: 'Dev not exists'});
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
}