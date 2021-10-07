
export interface IUser {
  // id: number
  name: string
  // first_name: string
  // last_name: string
  // created_at: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


export interface IUsers {
  items: IUser[];
  total_count: number;
}


export interface Product {
  id: number;
  name: string;
  quantity: number;
  provider: string;
}

export interface Workers {
  id: number;
  fio: string;
  position: string;
  rate: number;
}

export interface Hero
{
  id: number;
  name: string;
}


// export interface GithubIssue {
//   created_at: string;
//   number: string;
//   state: string;
//   title: string;
// }
