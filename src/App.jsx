import { useState } from 'react';
import Header from './shared/Header';
import Logon from './features/Logon';
import TodosPage from './features/Todos/TodosPage';

function App() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  return (
    <>
      <Header
        token={token}
        email={email}
        onSetToken={setToken}
        onSetEmail={setEmail}
      />
      {token ? (
        <TodosPage token={token} />
      ) : (
        <Logon onSetToken={setToken} onSetEmail={setEmail} />
      )}
    </>
  );
}

export default App;