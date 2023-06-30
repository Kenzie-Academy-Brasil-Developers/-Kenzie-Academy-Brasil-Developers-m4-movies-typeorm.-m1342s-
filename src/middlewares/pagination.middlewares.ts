import { count } from "console";
import { NextFunction, Request, Response } from "express";



const pagination = (req: Request, res: Response, next: NextFunction): void => {
    
  let queryPage: number = Number(req.query.page);
  let queryPerPage: number = Number(req.query.perPage);


  if (isNaN(queryPage)) {
    queryPage=1
}
if (isNaN(queryPerPage)) {
    queryPerPage=5
}


  const perPage: number =
    queryPerPage && queryPerPage >= 1 && queryPerPage <= 5 ? queryPerPage : 5;
  const page: number =
    queryPage && queryPage >= 1 && queryPage <= 5
      ? queryPage
      : 1;
  const index=perPage * (queryPage - 1)

  const perPagePage: number = queryPage > 3 && queryPerPage === 2 ? perPage : 2;

  const querySort: any = req.query.sort;
  const queryOrder: any = req.query.order;

  const orderOptions: Array<string> = ["asc", "desc"];
  const sortOptions: Array<string> = ["price", "duration"];

  let sort: string;
  let order: string;

  if (!(querySort && sortOptions.includes(querySort))) {
    sort = "id";
  } else {
    sort = querySort;
  }

  if (!querySort ||  !(queryOrder && orderOptions.includes(queryOrder))) {
    order = "asc";
  } else {
    order = queryOrder;
  }
  const url: string = "http://localhost:3000/movies";
  const prevPage: string | null =(index< 1) ? null: `${url}?page=${page - 1}&perPage=${perPage}`
  const nextPage: string = `${url}?page=${page + 1}&perPage=${perPage}`;

  res.locals = {
    ...res.locals,
    pagination: {
      page:index,
      perPage,
      order,
      sort,
      perPagePage,
      prevPage,
      nextPage,
    },
  };
  return next();
};

export default pagination;
