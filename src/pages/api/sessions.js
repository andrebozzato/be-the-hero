import { api } from '../../services/api'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body

    try {
      const response = await api('ongs')
      const ongs = response.data

      const ong = ongs.find((item) => item.id === id)

      if (!ong) {
        res.status(400).json({ error: 'Ong não encontrada para este ID' })
      }

      return res.status(200).json(ong)
    } catch (err) {
      res.status(400).json({ error: 'Falha na requisição' })
    }
  }
}
