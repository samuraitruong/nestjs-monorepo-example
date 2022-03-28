import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/')
export class AppController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  public getHello() {
    return this.appService.getHello();
  }

  @Get('r')
  public round() {
    return this.appService.roundNumber();
  }
}
