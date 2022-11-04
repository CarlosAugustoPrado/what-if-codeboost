import Link from 'next/link'
import Image from 'next/image'

import { Container } from '../../styles/global'
import { StylePageNotFound } from './styles'

import ImagePageNotFound from '../../assets/image-not-found.png'

export function ComponentPageNotFound() {
  return (
    <StylePageNotFound>
      <Container>
        <h1>Whoops, essa página sumiu.</h1>
        <p>OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações.</p>
        <Link href="/" legacyBehavior>
          <a>
            Voltar
          </a>
        </Link>
        <Image
          src={ImagePageNotFound}
          alt="Imagem de página não encontrada"
        />
      </Container>
    </StylePageNotFound>
  )
}