import React, { Component } from "react";

const ProductContext = React.createContext();

//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems:0,
  };

  //handle Sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  //handle CartOpen
  handleSidecart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  //close cart
  CloseCart = () => {
    this.setState({ cartOpen: false });
  };

  //open
  OpenCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleSidecart: this.handleSidecart,
          CloseCart: this.CloseCart,
          OpenCart: this.OpenCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
