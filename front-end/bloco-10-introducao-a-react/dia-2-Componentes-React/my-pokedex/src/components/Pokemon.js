import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight: { value, measurementUnit }, image } = this.props
        return (
            <div className="pokemon">
                <p>Nome: { name }</p>
                <p>Tipo: { type }</p>
                <p>Peso Medio: { `${value} ${measurementUnit}` }</p>
                <img src={ image } alt={`Imagem do ${ name }`}></img>
            </div>
        )
    }
}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.object.isRequired,
    image: PropTypes.string
}

export default Pokemon;