import {Injectable} from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class NotificationService {
    notifications = []

    constructor() {

    }

    showNotification(notification) {
        this.notifications.push(notification)
    }

    hideNotifications() {
        this.notifications = []
    }

}
