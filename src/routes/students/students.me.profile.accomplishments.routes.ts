import express, { Request, Response } from 'express';
const accomplishmentRouter = express.Router({ mergeParams: true });
import { ApiResponse } from '../../models/apiResponse/apiResponse';

// all api responses should be
// response code, message, data (if success), error message (if error)

accomplishmentRouter.get('/', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments details for student` });
});

accomplishmentRouter.get('/awards', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments --> awards details for student` });
});

accomplishmentRouter.get('/certifications', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments --> certifications details for student` });
});

accomplishmentRouter.get('/competitions', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments --> competitions details for student` });
});

accomplishmentRouter.get('/conferences', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments --> conferences details for student` });
});

accomplishmentRouter.get('/tests', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments --> tests details for student` });
});
accomplishmentRouter.get('/patents', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments --> patents details for student` });
});
accomplishmentRouter.get('/publications', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments --> publications details for student` });
});
accomplishmentRouter.get('/scholarships', async (req: Request, res: Response) => {
  res.json({ message: `Fetching 'me' accomplishments --> scholarships details for student` });
});

export default accomplishmentRouter;