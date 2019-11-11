
export const StatusEnum = {
  DISPONIVEL: { name: 'disponivel', next: 'desenvolvimento'},
  DESENVOLVIMENTO: { name: 'desenvolvimento', next: 'teste'},
  TESTE: { name: 'teste', next: 'pronto'},
  PRONTO: { name: 'pronto', next: 'pronto'},
  get: (status) => {
    return StatusEnum[status.toUpperCase()];
  },
  nextStatus: (currentStatus) => {
    switch(currentStatus){
      case 'disponivel': return 'desenvolvimento'
      case 'desenvolvimento':return 'teste'
      case 'teste': return 'pronto'
      case 'pronto': return 'pronto'
      default: return 'disponivel'      
    }
  }
}
