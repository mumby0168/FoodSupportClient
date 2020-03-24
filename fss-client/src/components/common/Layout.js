import React from "react";
import Container from "@material-ui/core/Container";


export default function Layout(props) {
    return (
        <Container maxWidth="md">
            {props.children}
        </Container>
    )
}