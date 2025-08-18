
import { Router } from "express";
import { deletePlatform, getPlatforms, getPlatformById, registerPlatform, revokePlatform, updatePlatform } from "../controllers/platform.controllers";



const router = Router();


router.get('/', getPlatforms)
router.post('/', registerPlatform)
router.put('/:id', updatePlatform as any)
router.get('/:id', getPlatformById)
router.delete('/:id', deletePlatform)
router.delete('/:id/revoke', revokePlatform)


export default router;