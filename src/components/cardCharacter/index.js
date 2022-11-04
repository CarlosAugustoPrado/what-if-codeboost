import { StyleCard } from "./styles";

import Link from "next/link"


import Image from "next/image"

export function CardCharacter({image, name, slug}) {
  return (
    <StyleCard>
      <Link href={`/character/${slug}`} legacyBehavior>
        <a>
          <div className="image">
            <Image 
              src={image}
              alt="Character"
              width={280}
              height={372}
            />
          </div>
          <div className="info">
            <div>
              <h3>{name}</h3>
              <span>Marvel Studios</span>
            </div>
            <span>What if</span>
          </div>
        </a>
      </Link>
    </StyleCard>
  )
}