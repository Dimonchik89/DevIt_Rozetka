import { Badge } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from 'nanoid'
import "../../style/helper.scss";

const goodPageLinks = [
    {title: "Все о товаре", link: ""},
    {title: "Характеристики", link: "characteristics"},
    {title: "Отзывы", link: "review"},
]
const GoodPageLinks = ({selectGood}) => {
    const activeStyle = {
        color: "green",
        textDecoration: "underline"
    }
    const linksContent = goodPageLinks.map(item => item.link === "review" ?
    <Badge key={nanoid()} badgeContent={selectGood.review ? selectGood?.review.length : null} color="success">
        <NavLink to={item.link} className="good-page__link" style={({isActive}) => { isActive ? activeStyle : null }}>{item.title}</NavLink>
    </Badge>
    :
    <NavLink key={nanoid()} to={item.link} className="good-page__link" style={({isActive}) => { isActive ? activeStyle : null}}>{item.title}</NavLink>)

    return (
        <div className="flex">
            {linksContent}
        </div>
    )
}
export default GoodPageLinks;