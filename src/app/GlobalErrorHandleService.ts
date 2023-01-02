import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    // throw new Error('Method not implemented.');
    console.error('an error occurred: ', error.message);
  }
}
