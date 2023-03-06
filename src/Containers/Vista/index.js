import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { todos } from '../../Services/axios'
import { Vista } from './vista'

import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const VistaLogica = () => {
    const [datosTabla, setDatosTabla] = useState([]);
    const [input, setInput] = useState('');
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 2000);

        const consumoWS = async () => {
            const ws = await todos();
            setDatosTabla(ws.data);
        }
        consumoWS();
    }, []);

    console.log('WS ', datosTabla)

    const columns = [
        { title: '#', field: 'userId' },
        { title: 'User', field: 'id' },
        { title: 'Decription', field: 'title' },
        {
            title: 'Completed', field: 'completed',
            render: (rowData) => {
                if (rowData.completed == false) {
                    return <ImCross />
                } else {
                    return <ImCheckmark />
                }
            },
        }
    ];


    const handleChange = (event) => {
        console.log('WS Agregue valor')
        setInput(event.target.value);
    }

    let temporal = {
        userId: '1',
        id: input,
        completed: 'false',
        title: 'titulo del boton',
    };

    const agregarValor = () => {
        console.log('WS Agregue valor');
        setDatosTabla([...datosTabla, temporal]);
        // console.log('WS', datosTabla);
    }

    const handleLimpiar = () => {
        setDatosTabla([]);
    }

    const reload = () => {
        window.location.reload();
    };

    return (
        <div>
            <Vista
                columns={columns}
                data={datosTabla}

                onClick={agregarValor}
                handleChange={handleChange}
                reload={reload}
                eliminar={handleLimpiar}

                show={show}
            />
        </div>
    )
}

export default VistaLogica
