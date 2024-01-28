const MessagingApp = ({ productId, userId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    useEffect(() => {
      const unsubscribe = db
        .collection('messages')
        .where('productId', '==', productId)
        .orderBy('timestamp')
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
  
      return () => {
        unsubscribe();
      };
    }, [productId]);
  
    const sendMessage = () => {
      if (newMessage.trim() !== '') {
        db.collection('messages').add({
          productId,
          userId,
          message: newMessage,
          timestamp: new Date(),
        });
        setNewMessage('');
      }
    };
  
    return (
      <div>
        <div style={{ height: '200px', overflowY: 'scroll' }}>
          {messages.map((message) => (
            <div key={message.timestamp.toMillis()}>
              <strong>{message.userId}</strong>: {message.message}
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    );
  };
  

export default MessagingApp