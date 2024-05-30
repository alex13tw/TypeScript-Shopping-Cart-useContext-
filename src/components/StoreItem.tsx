import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShopingCartContext'
type ItemProps={
    id: number
    name: string
    price: number
    imgUrl: string
}
const StoreItem = ({id,name,price,imgUrl}:ItemProps)=> {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  }= useShoppingCart()  
    const quantity = getItemQuantity(id);
  return (
    <div> 
      <Card className='h-100'>
        <Card.Img 
        variant='top'
        src={imgUrl}
        height='200px'
        style={{objectFit:"cover"}} /> 

        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className='fs-2'>{name}</span>
                <span className='ms-2 text-muted'>$ {price}</span> 
            </Card.Title>  
            <div className='mt-auto'> 
                {quantity === 0 ?( 
                    <button className='w-100 btn btn-primary' onClick={()=>increaseCartQuantity(id)} >+ Add to cart</button>  
                ):(    
                <div className='d-flex align-items-center flex-column' style={{gap:'.5rem'}}>
                  <div className='d-flex align-items-center justify-content-center' style={{gap:'.5rem'}} >
                    <button className='btn btn-primary'  onClick={()=>decreaseCartQuantity(id)}>-</button> 
                    <div>
                      <span className='fs-3'>{quantity}</span> In Cart
                    </div>
                    <button className='btn btn-primary'  onClick={()=>increaseCartQuantity(id)}>+</button>
                  </div> 
                   <Button variant='danger' size='sm' onClick={()=>removeFromCart(id)}>  
                    Remove         
                   </Button>     
              </div>  
                )               
              }       
            </div>
        </Card.Body>
      </Card>
    </div>
  )
} 

export default StoreItem
