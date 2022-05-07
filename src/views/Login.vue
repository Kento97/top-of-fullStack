<template>
    <div>
        <h1>Login</h1>
        <p v-if="isLogin">welcome {{ user?.username }}
            <el-button @click="logout">Logout</el-button>
        </p>
        <el-form ref="form" :model="loginModel" label-width="80px" v-else>
            <el-form-item label="Username" prop="username">
                <el-input v-model="loginModel.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="loginModel.password" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts' setup>
import { useUser } from '@/composables/useUsers';
const { isLogin, user, logout, loginModel, login } = useUser()
</script>

<style scoped>
</style>