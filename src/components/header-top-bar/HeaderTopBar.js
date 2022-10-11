import React from 'react'

import Container from "../../layout/Container/Container";

export default function HeaderTopBar() {
  return (
    <div className="column bg--red">
        <Container customClass="is-size-7 has-text-centered">
          <p className="has-text-white">
            Special 
            <span className="has-text-weight-semibold"> offer</span>! 
            Special<span className="has-text-weight-semibold"> price</span>! 
            <span className="has-text-weight-bold is-size-6"> -20% </span>
            <span className="has-text-weight-semibold">CODE: </span><span className="has-text-weight-bold is-size-6">MAJKEL20</span>
            </p>
        </Container>
      </div>
  )
}