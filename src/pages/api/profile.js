const profiles = [
  {
    id: 1,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: 'a94688b1'
  },
  {
    id: 2,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: 'a94688b1'
  },
  {
    id: 3,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: 'a94688b1'
  },
  {
    id: 4,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: 'a94688b1'
  },
  {
    id: 5,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: 'a94688b1'
  },
  {
    id: 6,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: 'a94688b1'
  },
  {
    id: 7,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: 'a94688b1'
  },
  {
    id: 8,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: '72028634'
  },
  {
    id: 9,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: '72028634'
  },
  {
    id: 10,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: '72028634'
  },
  {
    id: 11,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: '72028634'
  },
  {
    id: 12,
    title: 'Caso 1',
    description: 'Detalhes do caso',
    value: 120,
    id: '72028634'
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
