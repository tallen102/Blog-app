
const ChatPage = () => {
  const [authUser] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Use useEffect to fetch and update messages when the component mounts
  useEffect(() => {
    if (authUser) {
      const unsubscribe = db
        .collection('messages')
        .orderBy('timestamp')
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });

      return () => {
        unsubscribe();
      };
    }
  }, [authUser]);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      db.collection('messages').add({
        userId: authUser.uid,
        message: newMessage,
        timestamp: new Date(),
      });
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Chat</h2>
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

export default ChatPage;
