const net=require('net')

const server=net.createServer()

const clients=[]

server.on('connection',(client)=>{
    clients.push(client)
    client.write('Welcome too the chat')

    client.on('data',(data)=>{
        for(let i=0;i<clients.length;i++){
            if(clients[i]!==client){
                clients[i].write(data)
            }
        }
    })

    client.on('end',()=>{
        const index=clients.findIndex(e=>e===client)
        clients.splice(index,1)
    })
})

server.listen(3333)