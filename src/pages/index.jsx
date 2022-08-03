import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { api } from '../services/api'

import styles from '../styles/Home.module.scss'

import logoImg from '../assets/logo.svg'
import heroesImg from '../assets/heroes.png'

export default function Home() {
  const [id, setId] = useState()

  const router = useRouter()

  async function handleLogin(event) {
    event.preventDefault()

    try {
      const response = await api.post('sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)

      router.push('/profile')
    } catch (err) {
      console.log(err)
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className={styles.logonContainer}>
      <section>
        <Image src={logoImg} alt="logo be-the-hero" width={250} height={106} />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link href="/register">
            <a>
              <FiLogIn size={16} color="#e02041" />
              Não tenho cadastro
            </a>
          </Link>
        </form>
      </section>

      <Image src={heroesImg} alt="heroes" width={596} height={574} />
    </div>
  )
}
