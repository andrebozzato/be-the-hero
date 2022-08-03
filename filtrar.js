const ongs = [
  {
    id: 'a94688b1',
    name: 'Ong 1',
    email: 'ong1@gmail.com',
    whatsapp: '11 91234-1234',
    cidade: 'São Paulo',
    uf: 'SP'
  },
  {
    id: '72028634',
    name: 'Ong 2',
    email: 'ong2@ong.com',
    whatsapp: '11 98765 4321',
    cidade: 'Campinas',
    uf: 'SP'
  }
]

const id = 'a94688b1'

const ong = ongs.find((item) => item.id === id)

console.log(ong)
