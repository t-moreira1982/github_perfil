import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import { useState } from "react";


function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" placeholder="Digite o usuário do GitHub" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
