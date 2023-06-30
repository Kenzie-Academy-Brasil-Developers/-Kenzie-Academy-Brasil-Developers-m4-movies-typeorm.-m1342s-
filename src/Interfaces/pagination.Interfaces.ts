import { Movie } from "../entities";

interface Pagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number|null;
  data: Array<Movie>;
}

interface PaginationParams {
    page: number;
    perPage:number;
    order: string;
    sort: string;
    prevPage: string;
    nextPage: string;
  }

export {Pagination,PaginationParams}