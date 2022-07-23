import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error: any): void {
    // Exception can happen anywhere, including from outside of NgZone. So to display
    // the snackbar component properly, we need to ensure it's called from within zones.
    this.zone.run(() => {
      this.snackBar.open(error, '', {
        duration: 3000
      });
    });
  }
}
