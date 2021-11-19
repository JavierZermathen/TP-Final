import React from "react";
import AplicacionCrudTableRow from "./AplicacionCrudTableRow";

const AplicacionCrudTable = ({data, setDataToEdit, deleteData}) => {
    return(
        <div >
            <div className="app-container">
                <h3 className="App-header">Personajes ANIME</h3>
            </div>
            <table >
                <thead >
                    <tr >
                        <th >Nombre</th>
                        <th>Apellido</th>
                        {/* <th>Email</th> */}
                        <th>Acciones</th>
                    </tr>
                </thead>

                {/* valida si tierne que mapear el crud tablerow o no */}
                

                <tbody>
                    {(data.length ===0) ? <tr>
                        <td colSpan="3">Sin Datos</td>
                        </tr>:(data.map((el)=> <AplicacionCrudTableRow 
                    key={el.id} el={el}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData} 
                    />))}
                </tbody>
            </table>
        </div>
    )
};
export default AplicacionCrudTable;