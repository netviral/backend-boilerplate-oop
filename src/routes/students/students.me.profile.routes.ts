import express, { Request, Response } from 'express';
import accomplishmentRouter from './students.me.profile.accomplishments.routes';
import { ApiResponse } from '../../models/apiResponse/apiResponse';

// all api responses should be
// response code, message, data (if success), error message (if error)

const profileRouter = express.Router({ mergeParams: true });

profileRouter.use('/accomplishments', accomplishmentRouter);

// GET endpoints for various sections of the profile
profileRouter.get('/', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' entire profile details for student` });
});

profileRouter.get('/education', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' education details for student` });
});

profileRouter.get('/internships', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' internships details for student` });
});

profileRouter.get('/skills', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' skills details for student` });
});

profileRouter.get('/pors', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' pors details for student` });
});

profileRouter.get('/projects', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' project details for student` });
});

profileRouter.get('/volunteering', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' volunteering details for student` });
});

profileRouter.get('/ecas', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' eca details for student` });
});

// do we need separate get endpoints for each section? maybe not
// we can fetch the entire profile and let frontend filter if needed


// POST endpoints for various sections of the profile


export default profileRouter;
// we must ensure that this user is a student via middleware in app.ts
// admins cannot hit the me endpoints for students' data