import { Router } from "express";
import chirpRouter from "./chirps"

const router = Router()

router.use('/chirps',chirpRouter)

export default router