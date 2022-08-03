import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

import styles from './styles.module.scss'

import logoImg from '../../../assets/logo.svg'

export default function NewIncident() {
  return (
    <div className={styles.newIncidentContainer}>
      <div>
        <section>
          <Image
            src={logoImg}
            alt="logo be-the-hero"
            width={250}
            height={106}
          />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link href="/profile">
            <a>
              <FiArrowLeft size={16} color="#e02041" />
              Voltar para casos cadastrados
            </a>
          </Link>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
