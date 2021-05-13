import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Alunos() {
  const { alunos, setAlunos } = useContext(UserContext);
  return (
    <div>
      {alunos}
      <br />
      <button onClick={() => setAlunos("enrique")}>Trocar nome</button>
    </div>
  );
}

export default Alunos;
