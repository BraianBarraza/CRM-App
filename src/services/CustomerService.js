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
  },
  updateCustomer(id, data){
    return api.patch(`/customers/` + id, data)
  },
  changeState(id, data){
   return api.patch(`/customers/` + id, data)
  },
  deleteCustomer(id){
    return api.delete(`/customers/` + id)
  }

}
