import Link from 'next/link'
import Image from 'next/image'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg'

import styles from './styles.module.scss'
import { useEffect } from 'react'

export default function Profile() {
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {}, [])

  return (
    <div className={styles.profileContainer}>
      <header>
        <Image src={logoImg} alt="logo be-the-hero" width={151} height={64} />

        <span>Bem vinda, {ongName}</span>

        <Link href="/incidents/new">
          <a className="button">Cadastrar novo caso</a>
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
          xx
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÂO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÂO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÂO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÂO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  )
}
