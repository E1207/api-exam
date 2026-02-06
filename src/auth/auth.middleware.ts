import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    const validToken = process.env.ACCESS_TOKEN;

    if (!token) {
      throw new UnauthorizedException('Token manquant');
    }

    // Support both "Bearer token" and "token" formats
    const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;

    if (actualToken !== validToken) {
      throw new UnauthorizedException('Token invalide');
    }

    next();
  }
}
