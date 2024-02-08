import * as passport from 'passport';

export class PassportStrategy {
  Strategies: any[] = [];
  constructor(Strategies: any[]) {
    this.Strategies = Strategies;
  }

  public initPassport() {
    this.Strategies.forEach((Strategy) => {
      this.getPassportInstance().use(Strategy);
    });
  }

  public addStrategy(name: string, instance: any) {
    this.getPassportInstance().use(name, instance);
  }

  public authenticate(strategy: string, options?: any) {
    return this.getPassportInstance().authenticate(strategy, options);
  }

  getPassportInstance() {
    return passport;
  }
}
