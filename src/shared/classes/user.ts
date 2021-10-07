import {IUser} from "../interfaces";


export class User
{
  // public id: number;
  // public first_name:string;
  // public last_name:string;
  public name:string;
  // public isLogin = false;

  public static me: User;
  //  = new User({
  //    client_id: -1,
  //    first_name: '',
  //    last_name: '',
  //    email: '',
  //    created_at: ''
  // });

  constructor(data: IUser) {
    this.name = data.name;

  }


}
