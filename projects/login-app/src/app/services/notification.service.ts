import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';  // Importing Material Snackbar
import { SNACK_BAR_MESSAGE_TYPE } from './notification.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private snackBar: MatSnackBar) {}
  showNotification(message: string, context:string) {
    this.snackBar.open(message, '', {
      duration: 3000, 
      horizontalPosition: 'right',
      verticalPosition: 'top',
       panelClass: [context || SNACK_BAR_MESSAGE_TYPE.default],
    });
  }
}