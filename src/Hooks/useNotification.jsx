export const useNotification = (message) => {
  // const [data, setData] = useState('')
  Notification.requestPermission(permission => {
    if (permission === 'granted') {
      new Notification(message);
    } else {
      alert(message);
    }
  })
}
