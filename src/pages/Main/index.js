import React, { Component } from 'react'
import api from "../../services/api"
import './styles.css'

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
  }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const response = await api.get( '/products' )

    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo })
  }

  prevPage = () = {}

  nextPage = () = {
    const { page, productInfo } = this.state;

    if( page === productInfo.pages ) return

    const pageNumber = page + 1
  }

  render() {
    return (
      <div className="product-list">
        {this.state.products.map( product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button onClick={this.prevPage}>Anterior</button>
          <button onClick={this.nextPage}>Proximo</button>
        </div>
      </div>
    )
  }
}