import {createContext} from 'react';

export const contextForCart = createContext([]);

export const {Provider, Consumer} = contextForCart;