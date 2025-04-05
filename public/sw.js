self.addEventListener('push', function (event) {
    if (event.data) {
        const data = event.data.json()
        const options = {
            body: data.body,
            icon: data.icon || '/icons/icon-192x192.webp', // Using our icon
            badge: '/icons/icon-96x96.webp', // Example badge
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2',
            },
        }
        event.waitUntil(self.registration.showNotification(data.title, options))
    }
})

self.addEventListener('notificationclick', function (event) {
    console.log('Notification click received.')
    event.notification.close()
    // Change this URL to your actual website URL or a relevant page
    event.waitUntil(clients.openWindow('/'))
})
