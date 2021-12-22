import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif, deleteNotif } from "../controllers/notificationController.js";
const router = express.Router();

//get all
router.get('/notification', getNotifs);

//create
router.post('/notification', saveNotif);

//get by ID
router.get('/notification/:id', getNotifID);

//update
router.patch('/notification/:id', updateNotif);

//delete
router.delete('/notification/:id', deleteNotif);


export default router;