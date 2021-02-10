import { Router } from 'express';
import * as videoController from './videos.controllers'
const router = Router();


router.get( '/videos', videoController.getVideos );

router.post('/videos', videoController.setVideo );

router.delete('/videos/:id', videoController.deleteVideo );

router.get( '/videos/:id', videoController.getVideo );

router.put('/videos/:id', videoController.updateVideo );







export default router;
