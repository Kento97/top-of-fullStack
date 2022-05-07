import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import { useStorage, StorageSerializers } from '@vueuse/core'

const user = useStorage<{ id: number, username: string }>('user', null, undefined, { serializer: StorageSerializers.object })
export const useUser = () => {
    const loginModel = ref<{ username: string, password: string }>({
        username: '',
        password: ''
    })
    const login = async () => {
        user.value = {
            id: 1,
            username: loginModel.value.username,
        }
        ElMessage.success('登录成功')
    }
    const logout = async () => {
        user.value = null;
        ElMessage.success('退出成功');
    }
    const isLogin = computed(() => (!!user.value?.id))

    const registerModel = ref({})
    const register = async () => {
        ElMessage.success('注册成功');
    }

    return { loginModel, user, login, logout, isLogin, registerModel, register }
}