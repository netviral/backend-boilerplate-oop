// src/routes/students/index.ts
import express from 'express';
import studentMeRouter from './students.me.routes';
import studentAdminRouter from './students.admin.routes';

const router = express.Router({ mergeParams: true });

// Self-service routes, add ensureIsStudent middleware here in self
router.use('/me', studentMeRouter);

// Admin routes, ensureIsAdmin middleware should be added
router.use('/', studentAdminRouter);

export default router;
