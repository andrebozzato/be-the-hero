import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { randomBytes } from 'crypto'
import { FiArrowLeft } from 'react-icons/fi'
import { api } from '../../services/api'

import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')

  const router = useRouter()

  async function handleRegister(event) {
    event.preventDefault()

    const id = randomBytes(4).toString('HEX')

    const ong = {
      id,
      name,
      email,
      whatsapp,
      cidade,
      uf
    }

    try {
      const response = await api.post('ongs', ong)

      const data = response.data
      console.log(data)

      alert(`Seu ID de acesso: ${id}`)

      router.push('/')
    } catch (err) {
      console.log(err)
      alert('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <div className={styles.registerContainer}>
      <div>
        <section>
          <Image
            src={logoImg}
            alt="logo be-the-hero"
            width={250}
            height={106}
          />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link href="/">
            <a>
              <FiArrowLeft size={16} color="#e02041" />
              Voltar para home
            </a>
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <div>
            <input
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
