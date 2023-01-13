import CadastroGrupo from '../../components/grupos/CadastroGrupo';
import CadastroProjeto from '../../components/projetos/CadastrarProjeto';
import CadastroTurma from '../../components/turmas/CadastroTurma';
import './style.css';

function Cadastro() {
    return (
        <div className="container">
            <CadastroProjeto />
            <CadastroGrupo />
            <CadastroTurma />
        </div>
    )
}

export default Cadastro;