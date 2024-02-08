import { DNextFunc, DRequest, DResponse } from '../interfaces/dolph_interfaces';

export type Middleware = (req: DRequest, res: DResponse, next: DNextFunc) => void;
