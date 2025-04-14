import api from "../lib/axios"

export default{
  getCustomers(){
    return api.get('/customers')
  },
  getCustomer(id){
    return api.get('/customers/'+id)
  },
  addCustomer(data){
    return api.post('/customers', data)
  }

}
