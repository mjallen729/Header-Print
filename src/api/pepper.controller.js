import dotenv from 'dotenv'

dotenv.config('../.env')
let fnum = 0;

export default class PepperCtrl {
    static async getPepper(req, res, next) {
        console.log(req.headers);

        res.json({status: 'ok'});

    }

}