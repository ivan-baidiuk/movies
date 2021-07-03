import React, { Component } from 'react';
import { StyledCard } from "./FilmComponent.styles";
import { Typography } from 'antd';
import { NavLink } from "react-router-dom";
const { Title, Paragraph, Text } = Typography;

class FilmComponent extends Component {
  render() {
    const { itemInfo } = this.props;

    return (
      <StyledCard className="FilmItem" hoverable={true}>
        <div className="ImageWrapper">
          <img className="FilmImage" src={itemInfo.medium_cover_image} alt={itemInfo.title}/>
        </div>
        <div className="FilmInfo">
          <Title level={4} className="FilmTitle">
            <NavLink to={`/about/${itemInfo.id}`}>{itemInfo.title}</NavLink>
          </Title>
          <Paragraph className="FilmDescription">
            {itemInfo.description_full ? itemInfo.description_full : 'No description'}
          </Paragraph>
          <Paragraph className="FilmGenres">
            <Text strong={true}>Genres:&nbsp;</Text>
            {itemInfo.genres.map((it, i) => (
              i < itemInfo.genres.length - 1
                ? <Text key={i} className="FilmGenre">{it}, </Text>
                : <Text key={i} className="FilmGenre">{it}.</Text>
            ))}
          </Paragraph>
          <Paragraph className="FilmRating">
            <Text strong={true}>IMDB:</Text>
            {itemInfo.rating}
          </Paragraph>
        </div>
      </StyledCard>
    )
  }
}

export default FilmComponent;