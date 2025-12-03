import express, { Request, Response } from 'express';
import profileRouter from './students.me.profile.routes';  
import { ApiResponse } from '../../models/apiResponse/apiResponse';

// all api responses should be
// response code, message, data (if success), error message (if error)

const router = express.Router({ mergeParams: true });

// we must ensure that this user is a student via middleware in app.ts
// admins cannot hit the me endpoints for students' data

router.use('/profile', profileRouter);

// READ endpoints for applications and resumes
router.get('/applications', async (req: Request, res: Response) => {
  res.json({ message: `Fetching my applications` });
});

router.get('/resumes', async (req: Request, res: Response) => {
  res.json({ message: `Fetching my resumes` });
});



// CREATE endpoints for applications and resumes
router.post('/applications', async (req: Request, res: Response) => {
  res.json({ message: `Creating new application` });
});

router.post('/resumes', async (req: Request, res: Response) => {
  res.json({ message: `Creating new resume` });
});

export default router;
