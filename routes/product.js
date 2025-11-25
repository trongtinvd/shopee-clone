import { Router } from 'express';


const router = Router();

router.route('/:id')
  .get(async (req, res) => {
    res.status(200).render('product', { params: req.params });
  })

export default router;