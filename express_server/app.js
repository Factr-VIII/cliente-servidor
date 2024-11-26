const express = require("express");
const app = express();

const usuarios = [
{
    id: 1, nombre: "Juan",
    apellido: "Perez", email:
    "juanperez@gmail.com" },
    {id: 2, nombre: "Maria",
        apellido: "perez", email:
        "mariaperez@gmail.com"},
    
];



app.get("/usuarios", (req, res) => {
    res.send({usuarios});
});

app.get("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    const usuario = usuarios.find(u => u.id === id);
    res.send(usuarios[id - 1]);
});

app.post("/usuarios", (req, res) =>{
    res.send("Usiario creado");
} );
                          