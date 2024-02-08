import { PassportStrategy } from './passport_strategy';

export const UsePassport = (Strategies: any[]) => {
  const passportStrategy = new PassportStrategy(Strategies);
  passportStrategy.initPassport();
  return passportStrategy;
};
