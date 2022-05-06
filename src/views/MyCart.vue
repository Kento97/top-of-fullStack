<template>
    <div>
        <h1>My Cart</h1>
        <h2 v-if="isCartEmty">暂无数据</h2>
        <ul v-else>
            <li v-for="(item, index) in cart.items" :key="index">
                <div>
                    <h3>{{ item.name }} ￥ {{ item.price }}</h3>
                    <el-input-number :modelValue="item.quantity" size="normal" @update:modelValue="(quantity: number) => {
                        updateQuantity(item, quantity)
                    }">
                    </el-input-number>
                    <el-button type="danger" size="default" @click="removeFromCart(item)">remove</el-button>

                </div>
            </li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
import { useCart } from '@/composables/useCart';
const { cart, updateQuantity, removeFromCart, isCartEmty } = useCart()
</script>

<style scoped>
</style>