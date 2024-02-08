export interface PassportStrategyType<T = any> extends Function {
  new (...args: any[]): T;
}
