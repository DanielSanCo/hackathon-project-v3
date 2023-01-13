import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Projeto from '../../../models/Projeto';
import { buscaId, deleteId } from '../../../services/service';
import './style.css';

function DeleteProject() {
    
    let navigate = useNavigate()
    const { id } = useParams<{ id: string }>();

    const [nomeProjeto, setNomeProjeto] = useState('')

    const [projeto, setProjeto] = useState<Projeto>()

    useEffect(() => {
        if (id !== undefined) {
            findById(`${id}`)
        }
    }, [id])

     async function findById(id: string) {
         buscaId(`/projetos/${id}`, setProjeto, {})
    }

    function sim() {
        deleteId(`/projetos/${id}`, {
        });
        navigate('/projetos')
    }
    function nao() {
        navigate('/projetos')
    }

    return (
        <div className='deleteArea'>
            <div className='deleteConfirmation'>
                <div>Deseja realmente Deletar a postagem</div>
                <div>post {projeto?.nomeProjeto}?</div>
                <div className='yesOrNot'>
                    <div onClick={() => sim()}>Sim</div>
                    <div onClick={() => nao()}>Não</div>
                </div>
            </div>
        </div>
    )
}

export default DeleteProject;