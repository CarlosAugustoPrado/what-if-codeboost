import { useEffect } from "react";
import { ListCharacters } from "../components/home/listCharacters";
import { SectionHero } from "../components/home/sectionHero";
import { PageTitle } from "../components/PageTitle";
import { getPrismicClient } from "../service/prismic";


export default function Home({dataPage, characters}) {
  

  return (
    <>
      <PageTitle
        title="What if? - Codeboost"
        description="Um projeto desenvolvido para o curso Codeboost"
      />    
      <SectionHero data={dataPage}/>      
      <ListCharacters data={characters}/>      
    </>
     
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentsPage = await prismic.getSingle("home");

  const characters = await prismic.getAllByType('character');

   
  return {
    props: {
      dataPage: contentsPage.data,
      characters,
    },
    revalidate: 60,
  }
}