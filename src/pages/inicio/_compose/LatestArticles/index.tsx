import React from "react";
import {
  ArticleTitle,
  Author,
  BackImage,
  Container,
  Content,
  Description,
  Grid,
  GridItem,
  Title,
} from "./styles";
import Image from "next/image";
import { gridItems } from "./content";

const LatestArticles: React.FC = () => {
  return (
    <Container className="article container container--px">
      <Title>Latest Articles</Title>

      <Grid>
        {gridItems.map((item) => (
          <GridItem key={item.image} href="#">
            <BackImage>
              <Image src={item.image} alt={item.alt} layout="fill" />
            </BackImage>

            <Content>
              <Author>{item.author}</Author>
              <ArticleTitle>{item.title}</ArticleTitle>
              <Description>{item.description}</Description>
            </Content>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestArticles;
