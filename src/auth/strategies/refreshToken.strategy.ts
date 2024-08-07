import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtPayload, UserType } from '../auth.types';
import { extractTokenFromCookies } from 'src/common/helpers/jwt-token.helper';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([extractTokenFromCookies("jwt-refresh")]),
      secretOrKey: process.env.JWT_REFRESH_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    return payload
  }
}