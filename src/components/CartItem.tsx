import React from 'react'
import { useShoppingCart } from '../context/ShopingCartContext'
import storeItems from '../data/items.json'
import { Stack, Button } from 'react-bootstrap'

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return (
        <div>
            <Stack direction='horizontal' gap={2}>
                <img src={item.imgUrl}
                    style={{ width: '125px', height: '75px', objectFit: 'cover' }}
                    alt={item.name} />
                <div className='me-auto'>
                    <div>
                        {item.name} {''}
                        {quantity > 1 && (
                            <span className='text-muted' style={{ fontSize: '.65rem' }}> {quantity} x</span>
                        )}
                    </div>
                    <div className='text-muted' style={{ fontSize: '.75rem' }}>
                        $ {item.price}
                    </div>
                    <div>
                        $ {item.price * quantity}
                    </div>
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    &times; 
                </Button>
            </Stack>
        </div>
    )
}

export default CartItem
