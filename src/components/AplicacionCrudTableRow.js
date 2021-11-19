import React from "react";

const AplicacionCrudTableRow = ({el, setDataToEdit,deleteData})=>{


    
    let {nombre,apellido,id} = el;
    return(
        
            <tr  >
                <td>{nombre}</td>
                <td>{apellido}</td>
                {/* <td>{emailContacto}</td> */}
                

                <td>
                    <button onClick={()=>setDataToEdit(el)}>Editar</button>
                    <button onClick={()=>deleteData(id)}>Eliminar</button>
                </td>

            </tr>
      
    );
};
export default AplicacionCrudTableRow;