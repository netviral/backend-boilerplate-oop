import express, { Request, Response } from 'express';
import { ApiResponse } from '../../models/apiResponse/apiResponse';

// all api responses should be
// response code, message, data (if success), error message (if error)

const router = express.Router({ mergeParams: true });

router.get('/', async (req: Request, res: Response) => {
  res.json({ message: `Fetching all students for tenant: ${req.query.tenantid}` });
});

router.get('/:id', async (req: Request, res: Response) => {
  console.log("req.query");
  res.api(
    ApiResponse.success(     
      202,
      "Student fetched successfully",
      { message: `Fetching details for student ${req.params.id} for tenant: ${req.query.tenantid}` },
    )
  );
});

router.get('/:id/profile', async (req: Request, res: Response) => {
  console.log(req.user);
  res.api(
    ApiResponse.success(
      202,
      "Student profile fetched successfully",
      { message: `Fetching profile for student ${req.params.id} for tenant: ${req.query.tenantid}` },
    )
  );
});

export default router;
