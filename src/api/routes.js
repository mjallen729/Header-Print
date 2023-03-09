import express from 'express'
import PepperCtrl from './pepper.controller.js'

const router = express.Router();

router.route('/pepper').get(PepperCtrl.getPepper)

export default router