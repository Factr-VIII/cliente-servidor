const express = require('express')
const {pokemonRouter} = require('./routes/pokemon')


//crear clase
class Server{
    constructor(){ //son las caracteristicas basicas de la clase
      this.app=express()
      this.port = 3000
      this.seeders()
      this.middlewares()
      this.routes()
    }
     
    middlewares(){
        this.app.use(express.json())
    }



    routes(){
       this.app.use('/pokemon', pokemonRouter) 
    }

   seeders(){
        require('./seeds/pokemon').pokemonsSeeder()
    }

    start(){
        this.app.listen(this.port,()=>{
            console.log('server is runnig on port '+ this.port)
        })
    }
}

module.exports={
    Server
}