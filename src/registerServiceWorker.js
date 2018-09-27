if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker
    .register('../service-worker.js')
    .then(() => console.log('Service Worker registriert.'))
    .catch(error => console.warn(`Service Worker nicht registriert: ${error}`))
}
