import { AreaSocial, ContextArea, SectionHeroStyle } from "./styles";
import { Container } from "../../../styles/global"

import IconYoutube from "../../../assets/youtube.svg"
import IconInstagram from "../../../assets/instagram.svg"
import Image from "next/image"
import { PopupVideo } from "../../popupVIdeo";


const socials = [
  {
    name: "Youtube",
    url: "#",
    icon: IconYoutube
  },
  {
    name: "Instagram",
    url: "#",
    icon: IconInstagram
  }
]

export function SectionHero({data}) {
  
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {
             socials.map(({name, url, icon}) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Image
                      src={icon}
                      alt={name}
                    />
                  </a>
                </li>
              )
             })
            }
          </ul>
        </AreaSocial>
        <ContextArea>
          <div className="left">
            <h3>{data.subtitle_hero}</h3>
            <h1>{data.title_hero}</h1>
            <p>
              {data.description_hero[0].text}
            </p>
            <a href={data.url_button.url} target="_blank" rel="noreferrer">{data.label_button_hero}</a>      
          </div>
          <PopupVideo label={data.label_trailler} thumb={data.thumbnail_trailler.url}/>
        </ContextArea>
      </Container>
    </SectionHeroStyle>
  )
}