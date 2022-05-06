/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface Product {
    id: number;
    name: string;
    price: number;
    stock?: number;
    [key: string]: any;
}
interface CartItem {
    productId: number;
    quantity: number;
    name: string;
    price: number;
}