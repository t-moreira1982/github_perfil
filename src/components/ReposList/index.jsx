import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";
import PropTypes from "prop-types";

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 2000);
            })
            .catch(e => {
                setEstaCarregando(false);
                console.error(e);
            })
    }, [nomeUsuario]);


    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (repos.length === 0) ? (
                <h1>Usuário não encontrado. Favor Digitar um usuário válido.</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" rel="noreferrer" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}


        </div>
    )
}

ReposList.propTypes = {
    nomeUsuario: PropTypes.string.isRequired,
};

export default ReposList;