import { User } from './user';
import * as moment from 'moment';

export const USERS: User[] = [
  { name: 'Kely Qwerty Smith', phone: '+7 808 808-99-99', createdDate: moment('2017-08-01 15:00:15') },
  { name: 'Jess', phone: '+7 868 868-11-99', createdDate: moment('2017-08-01 16:00:15') },
  { name: 'Abram Test', phone: '+7 900 900-99-05', createdDate: moment('2017-08-01 10:00:15') },

  { name: 'Dmitry', phone: '+7 555 555-94-98', createdDate: moment('2017-08-01 19:00:15') },
  { name: 'Ross', phone: '+7 928 928-00-02', createdDate: moment('2017-08-01 15:00:15') },
  { name: 'Ann', phone: '+7 951 951-99-99', createdDate: moment('2017-08-01 15:00:15') }
];
