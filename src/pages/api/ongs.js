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

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(ongs)
  } else if (req.method === 'POST') {
    const data = req.body

    ongs.push(data)

    res.status(200).json(ongs)
  }
}
