import { NextFunction, Response } from 'express';

export interface IPayload {
  sub: string | object | Buffer;
  iat: number;
  exp: number;
  info?: string | object | Array<any>;
}

export interface DRequest extends Request {
  /**
   * stores the value of token payload
   */
  payload?: IPayload;
}

export interface DResponse<T = any> extends Response {
  body?: T;
}

export interface DNextFunc extends NextFunction {}
