import Button from '@material-ui/core/Button';
import { CartItemType } from '../App';
import React, { Component } from 'react';
const s = require('./item.css');



type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};





export default class Item extends Component<Props> {
  componentDidMount() {
    var status:  boolean = false;
    const more = document.querySelectorAll(".divItem>.more") as NodeListOf<Element>;
    for (let i = 0; i<more.length; i++){
      more[i].addEventListener('click', function(){


        if(status === false) {
            const divMain = more[i].parentNode as Element;
            divMain.classList.add('active');
            status = true;
        }
        else if ( status ===  true) {
          const divMain = more[i].parentNode as Element;
          divMain.classList.remove('active');
          status = false;
        }
      })
    }
    
  }

  render() {
    return (
      <div className="divItem">
        <img src={this.props.item.image} alt={this.props.item.title} />
        <div>
          <h3>{this.props.item.title}</h3>
          <h4>${this.props.item.price}</h4>
          <p>{this.props.item.description}</p>
        </div>
        <a className="more"></a>
        <Button onClick={() => this.props.handleAddToCart(this.props.item)}>Add to cart</Button>
      </div>
    )
  }
}




