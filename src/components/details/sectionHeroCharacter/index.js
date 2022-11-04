import Image from "next/image";

import { StyleSectionHeroCharacter } from "./styles";
import { Container } from "../../../styles/global"

import ImageCharacter from "../../../assets/character.jpg"

export function SectionHeroCharacter({data}) {
  
  return (
    <StyleSectionHeroCharacter>
      <Container>
        <div className="image">
          <Image
            src={data.image_character.url}
            width={data.image_character.dimensions.width}
            height={data.image_character.dimensions.height}
            alt="Imagem do personagem"
          />
        </div>
        <div className="info">
          <span>A história</span>
          <div>
            <h1>{data.name_character}</h1>
            <p>{data.description_character[0].text}</p>
          </div>
        </div>
      </Container>
    </StyleSectionHeroCharacter>
  )
}