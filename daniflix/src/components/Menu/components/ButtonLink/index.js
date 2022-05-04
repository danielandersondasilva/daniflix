import React from "react";

export default function ButtonLink(props) {
    // props => {className: ""}
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}