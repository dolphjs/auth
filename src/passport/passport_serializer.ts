import { IPayload } from '@dolphjs/dolph/common';
import * as passport from 'passport';

export abstract class PassportSerializer {
  abstract serializeUser(user: any, done: Function);

  abstract deserializeUser(payload: IPayload, done: Function);

  getPassportInstance() {
    return passport;
  }

  constructor() {
    const passportInstance = this.getPassportInstance();
    passportInstance.serializeUser((user, done) => {
      this.serializeUser(user, done);
    });

    passportInstance.deserializeUser((payload: IPayload, done) => {
      this.deserializeUser(payload, done);
    });
  }
}
