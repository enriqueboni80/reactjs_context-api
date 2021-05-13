import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [alunos, setAlunos] = useState("Lucas Oliveira");

  return (
    <UserContext.Provider value={{ alunos, setAlunos }}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
