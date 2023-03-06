import React from 'react'
import { Loading } from '../../Components/LoadingSpinner/loading';
import Tabla from '../../Components/tabla';


export const Vista = (props) => {
    try {
        const {
            data,
            columns,
            onClick,
            handleChange,
            reload,
            eliminar,
            openLoading,
            show
        } = props;

        if (show) {
            return (
                <div>
                    <h1>Loading</h1>
                    <Loading />
                </div>
            )
        } else {
            return (
                <div>
                    <Tabla
                        title={'React Test'}
                        columns={columns}
                        data={data}
                    />

                    <br />
                    <br />
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Ingresa el valor"
                    />
                    <br />
                    <button onClick={onClick}
                        style={{
                            color: "#ffffff",
                            backgroundColor: "#1976d2",
                            border: "none",
                            padding: "1rem",
                            borderRadius: "5px",
                            cursor: "pointer",
                            alignItems: "center",
                            margin: "1rem"
                        }}
                    >
                        <span style={{ fontSize: " 1.2rem" }}>+</span> Agregar
                    </button>
                    <button onClick={reload} style={{
                        color: "#ffffff",
                        backgroundColor: "#1976d2",
                        border: "none",
                        padding: "1rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                        alignItems: "center",
                        margin: "1rem"
                    }}>Reload</button>
                    
                    <button onClick={eliminar} style={{
                        color: "#ffffff",
                        backgroundColor: "red",
                        border: "none",
                        padding: "1rem",
                        borderRadius: "50px",
                        cursor: "pointer",
                        alignItems: "center",
                        margin: "1rem"
                    }}>Limpiar</button>

                </div >
            )
        }
    } catch (error) {
        return <h1>Error</h1>
    }
}
