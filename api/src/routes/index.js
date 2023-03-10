const { Router } = require("express")
const cors = require("cors")


const router = Router()

router.options("*", cors({ origin: "*", optionsSuccessStatus: 200 }));
router.use(cors({ origin: "*", optionsSuccessStatus: 200 }));






module.exports = router;