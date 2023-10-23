import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface IProduct {
    id: string;
    qty: number;
    price: number;
}

export interface ICartState {
    listProducts : IProduct[];
    total: number;
}

const initialState: ICartState = {
    listProducts: [],
    total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
        console.log('vcl')
        if (state.listProducts.filter((product) => product.id === action.payload.id).length > 0) {
            state.listProducts = state.listProducts.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        qty: product.qty + action.payload.qty
                    }
                }
                return product
            })
        } else {
            state.listProducts.push(action.payload)
        }
        state.total = state.listProducts.reduce((total, product) => total + product.qty * product.price, 0)
    },
    subProduct: (state, action: PayloadAction<IProduct>) => {
        if (state.listProducts.filter((product) => product.id === action.payload.id).length > 0) {
            const newListProducts = state.listProducts.map((product) => {
                if (product.id === action.payload.id ) {
                    return {
                        ...product,
                        qty: product.qty - action.payload.qty
                    }
                }
                return product
            })

            state.listProducts = newListProducts.filter((product) => product.qty > 0)
            state.total = state.listProducts.reduce((total, product) => total + product.qty * product.price, 0)
        }
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
        if (state.listProducts.filter((product) => product.id === action.payload.id).length > 0) {
            state.listProducts = state.listProducts.filter((product) => product.id !== action.payload.id)
            state.total = state.listProducts.reduce((total, product) => total + product.qty * product.price, 0)
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, subProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer