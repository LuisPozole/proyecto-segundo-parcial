"use client"; // Esto indica que el componente debe renderizarse en el lado del cliente

export default function Cargando() {
    return (
        <div className="container">
            <div className="spinner"></div>
            <h1 className="text">Cargando...</h1>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: #000000; /* Fondo oscuro para combinar con el resto de la app */
                }

                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 5px solid #444; /* Color gris oscuro para el borde del spinner */
                    border-top: 5px solid #ff3d3d; /* Rojo intenso para el borde superior */
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 20px;
                }

                .text {
                    font-size: 1.5em;
                    color: #ff3d3d; /* Rojo intenso para el texto */
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: bold;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

