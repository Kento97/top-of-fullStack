<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="(item) in products" :key="item.id">
        <div>
          <h3>
            {{ item.name }} ￥ {{ item.price }}
          </h3>
          <el-button type="primary" size="default" @click="addToCart(item)">Add to Cart</el-button>

        </div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts' setup>
import { useCart } from '@/composables/useCart';
import { onMounted, ref } from 'vue';

const { addToCart } = useCart()
const products = ref<Product[]>([]);
onMounted(() => {
  products.value = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
    },
  ]
})
</script>

<style scoped>
</style>