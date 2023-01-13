import React, { useEffect, useState } from 'react';
import './style.css';
import Projeto from '../../models/Projeto';
import Turma from '../../models/Turma';
import { buscaId, deleteId } from '../../services/service';
import { useNavigate, useParams } from 'react-router-dom';

function Projetos() {

    const [valueTurma, setValueTurma] = useState('')
    const [valueGrupo, setValueGrupo] = useState('')
    const [valueNomeProjeto, setValueNomeProjeto] = useState('')
    const [displayCa, setDisplayCa] = useState('none')

    const [nomeGrupo, setNomeGrupo] = useState('')

    const [projetos, setProjetos] = useState<Projeto[]>([])
    const [turmas, setTurmas] = useState<Turma[]>([])

    const NomeTurma = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueTurma(e.target.value)
    }
    const NumeroGrupo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueGrupo(e.target.value)
    }
    const NomeProjeto = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueNomeProjeto(e.target.value)
    }


    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        getData2()
    }, [])

    async function getData() {
        try {
            const response = await fetch("https://gen-projetos.onrender.com/projetos")
            const data = await response.json()
            setProjetos(data)
            console.log(data)
            return data;
        } catch (err) {
            console.log("error")
            return err
        }
    }

    async function getData2() {
        try {
            const response = await fetch("https://gen-projetos.onrender.com/turmas")
            const data = await response.json()
            setTurmas(data)
            console.log(data)
            return data;
        } catch (err) {
            console.log("error")
            return err
        }
    }

    //DELETAR PROJETO


    return (
        <><div className="pageDois">
            <div className='projectArea'>
                <div className='inputArea'>
                    <div className='divInput'>
                        <input type="text" placeholder='Turma' value={valueTurma} onChange={NomeTurma} />
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="" />
                        </div>
                    </div>
                    <div className='divInput'>
                        <input type="text" placeholder='Grupo' value={valueGrupo} onChange={NumeroGrupo} />
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="" />
                        </div>
                    </div>
                    <div className='divInput'>
                        <input type="text" placeholder='Nome do Projeto' value={valueNomeProjeto} onChange={NomeProjeto} />
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="" />
                        </div>
                    </div>

                    <div className='divInput'>
                        <a href='/cadastrar'><button>Novo Projeto</button></a>
                    </div>
                </div>

                <div className='listProject'>

                    {
                        projetos.map((item, index) => (
                            valueTurma === '' && valueGrupo === '' && valueNomeProjeto === '' || valueTurma === item.grupoPi?.turma?.descricao || valueGrupo === item.grupoPi?.numeroGrupo || valueNomeProjeto === item.nomeProjeto ?
                                <div key={index} className="eachProject">
                                    {turmas.map((item, key) => (
                                        <>
                                            {item.grupoPi?.numeroGrupo === nomeGrupo && item.grupoPi?.numeroGrupo !== '' ?
                                                <div>{item.descricao}</div>
                                                :
                                                ''
                                            }
                                        </>
                                    ))}
                                    <div>{item.grupoPi?.numeroGrupo}</div>
                                    <div className='logoProjeto'>
                                        <img src={item.logoProjeto} alt="" />
                                    </div>
                                    <div className='imgProjeto'>
                                        Imagem do Projeto
                                    </div>
                                    <h4>{item.nomeProjeto}</h4>
                                    <a href={item.linkProjeto} target="_blank">Abrir projeto</a>
                                    <div className='putDelete'>
                                        <div className='putDeleteDiv'>Atualizar</div>
                                        <div><a href={`/deletarProjeto/${item.id}`} className="putDeleteDiv2">Deletar</a></div>
                                    </div>
                                    
                                </div>
                                :
                                ''
                        ))
                    }
                </div>
            </div>
        </div>

        </>
    )
}

export default Projetos;