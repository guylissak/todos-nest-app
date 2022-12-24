import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService {
  info(message: string) {
    console.log(`INFO - ${message}`);
  }

  error(message: string) {
    console.error(`ERROR - ${message}`);
  }
}
