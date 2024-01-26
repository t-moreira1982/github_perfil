import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import { useState } from "react";


function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <div className="formulario container">
        <label htmlFor="">Digite um usuário do GitHub válido</label>
        <input type="text" placeholder="Digite o usuário do GitHub" onBlur={(e) => setNomeUsuario(e.target.value)} />
      </div>
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
