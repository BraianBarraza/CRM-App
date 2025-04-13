import api from "../lib/axios"

export default{
  getClients(){
    return api.get('/customers')
  },
  addCustomer(data){
    return api.post('/customers', data)
  }

}
