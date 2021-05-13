import UserProvider from "./contexts/user";
import Alunos from './components/alunos'

function App() {

  return (
    <UserProvider>
      <Alunos />
    </UserProvider>
  );
}

export default App;
