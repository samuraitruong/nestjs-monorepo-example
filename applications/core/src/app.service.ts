/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import { log, round } from '@samuraitruong/share-lib';

@Injectable()
export class AppService {
  public getHello() {
    return log('hello');
  }

  public roundNumber() {
    return round(1.5);
  }
}
