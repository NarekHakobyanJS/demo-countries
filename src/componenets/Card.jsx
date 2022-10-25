import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.article`
    border-radius : var(--radii);
    background-color : var(--colors-ui-base);
    box-shadow : var(--shadow);
    cursor : pointer;
    overflow : hidden
`
const CartImage = styled.img`
    display : block;
    width : 100%;
    height : 150px;
    object-fit: cover;
    object-position : center;
    box-shadow : var(--shadow);
`
const CardBody = styled.div`
    padding : 1rem;
`
const CardTitile = styled.h3`
    margin : 0;
    font-size : var(--fs-md);
    font-weight: var(--fw-bold);
    text-align : center;
`
const CardList = styled.ul`
    list-style : none;
    margin : 0;
    padding : 1rem 0;
`
const CardListItem = styled.li`
    line-height : 1.5;
    font-size : var(--fs-sm);
    font-weight : var(--fw-light);
    & > b {
        font-weight : var(--fw-bold);
    }
`

function Card({img, name, info = [], onClick}) {
  return (
    <Wrapper onClick={onClick}>
        <CartImage src={img}/>
        <CardBody>
            <CardTitile>{name}</CardTitile>
            <CardList>
                {info.map(el => (
                    <CardListItem key={el.title}>
                        <b>{el.title} : </b> {el.description}

                    </CardListItem>
                ))}
            </CardList>
        </CardBody>
    </Wrapper>
  )
}

export default Card