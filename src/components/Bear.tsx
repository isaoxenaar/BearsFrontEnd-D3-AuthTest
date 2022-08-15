import React, { FC, Component } from 'react'
import "../css/bear.css"
import {bearType} from "../types/bearTypes";

interface IProps {
  bear:bearType
}

const Bear:FC<IProps> = ({bear}) => {
    return (
      <section className="Bear--main">
        <blockquote>coordinates: ({bear.latitude},{bear.longitude}) </blockquote>
        <blockquote>{bear.date}</blockquote>
        <blockquote>{bear.id}</blockquote>
        <blockquote>{bear.observerId}</blockquote>
        <form>

        </form>
      </section>
    )
}

export default Bear;
//change bear.
