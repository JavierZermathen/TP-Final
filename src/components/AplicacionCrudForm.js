import React,{useState,useEffect} from "react";


const initialForm = {
    nombre:"",
    apellido:"",
    // emailContacto:"",
    id:null,
};

const AplicacionCrudForm =({createData,updateData,dataToEdit,setDataToEdit}) =>{ 
    const [form,setForm]= useState(initialForm);
    //actualiza el esta del formulario con los datos a editar
    useEffect(()=>{
        if(dataToEdit){
            //Asigna al formulario los datos del registro a editar
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    },[dataToEdit]);

    //-------------permite editar un registro de lA BASE DE DATOS---------------------------------
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    //-------------------envia los datos a la base si esque estan todos completos---------------------------
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.nombre||!form.apellido){
            alert ("Datos incompletos");
            return;
        }
        if (form.id===null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    }
    
    
    
    //---------------limpia los datos cargados en los campos-------------------------------
    const handleReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }

    return(

        // introduce imputs y los botones de enviar y limpiar campos
        <div>
            <h3>{dataToEdit? "Editar":"Agregar"} </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={form.nombre}/>
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} value={form.apellido}/>
                {/* <input type="text" name="emailContacto" placeholder="Email Contacto" onChange={handleChange} value={form.emailContacto}/> */}
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
};
export default AplicacionCrudForm;