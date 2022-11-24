import  {selecoesCopa2022}  from "../data/selecsData"
import './GolsCopa.css'

const GolsCopa = () => {

const selecoes2022 = selecoesCopa2022;


  return (
    <div>
        <div className="align-itens">
            <h1>Tabela de Gols</h1>
        </div>
        <div >
          <ul className="selecs-2022">
             { selecoes2022.map((id, index) => (
                 <div className="list">
                    <table>
                        <tr  key={index}>
                            <td>{id.name}</td>
                            <td><span className="label">Gols Feitos:</span> <span className="score-scored">{id.goalScored}</span></td>
                            <td><span className="label">Gols Sofridos:</span> <span className="score-conceded">{id.goalConceded}</span></td>
                            {/* <td>Saldo: <span className="score">{id.goalScored - id.goalConceded}</span></td> */}
                            <td>
                                {(id.goalScored - id.goalConceded) <= 0 ? (<><span className="label">Saldo:</span><span className="score-negative">{id.goalScored - id.goalConceded}</span></>) : 
                                ( <><span className="label">Saldo:</span><span className="score-positive">{id.goalScored - id.goalConceded}</span></>)}
                            </td>
                        </tr>
                    </table>
                 </div>
             ))}
          </ul>
        </div>
    </div>
  )
}

export default GolsCopa
