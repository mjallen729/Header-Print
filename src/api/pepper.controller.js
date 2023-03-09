import dotenv from 'dotenv'

dotenv.config('../.env')
let fnum = 0;

export default class PepperCtrl {
    static async getPepper(req, res, next) {
        let key = req.query.key

        if (key == process.env.KEY) {
            fnum += 1;
            console.log(`shared ${fnum} times`);
            res.json({ pepper: process.env.PEPPER });

        } else {
            res.status(404).json({error: "400 bad cred"});
        }

    }

}