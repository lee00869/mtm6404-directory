//Create a list function
const list = (clients) => {
    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  ${client.name}
  <strong>${client.balance} </strong>
</li>
        `).join('')
}

//Create an order function
const order = (clients, property) => {
    return clients.sort((a, b) => {
        if(a[property] < b[property]){
            return -1
        } else if (a[property] > b[property]){
            return 1
        } else {return 0}
            

    })
}

//Create an total function
const total = clients => clients.reduce((total, client) => total + client.balance, 0)

//Create an info function
const info = (index) => {
    return clients.find(client => client.index === index)
  }

//Create an search function. 
const search = (query) =>{
   return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase())
    )}
   