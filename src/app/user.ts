import { Moment } from 'moment';
import * as moment from 'moment';

export class User {
  public id: number;
  public name: string;
  public phone: string;
  public createdDate: Moment;

  /**TODO: this need cnange*/
  static identifier: number = 10;

  constructor() {
    this.id = User.identifier++;
    this.createdDate = moment();
  }
}
