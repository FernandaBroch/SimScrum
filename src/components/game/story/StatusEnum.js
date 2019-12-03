
export const StatusEnum = {
  DISPONIVEL: { name: 'disponivel', next: 'desenvolvimento'},
  DESENVOLVIMENTO: { name: 'desenvolvimento', next: 'teste'},
  TESTE: { name: 'teste', next: 'pronto'},
  PRONTO: { name: 'pronto', next: 'pronto'},
  get: (status) => {
    return StatusEnum[status.toUpperCase()];
  }
}
