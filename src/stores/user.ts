import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type User } from '@/types/User'


export const useAuthStore = defineStore('auth', () => {
    const isAuth = ref<boolean>(false)
    const authenticate = () => {
        isAuth.value = true;
    }

    const disconnect = () => {
        isAuth.value = false;
    }

    return {
        isAuth,
        authenticate
    }
});
export const useUserStore = defineStore('user', () => {
    const user = ref<User>({
        photo: '',
        name: '',
        bio: '',
        phone: '',
        email: '',
        password: ''
    })
    const updateEmail = (email: string) => {
        user.value.email = email
    }

    const updatePhoto = (photo: string) => {
        user.value.photo = photo
    }

    return {
        user,
        updateEmail,
        updatePhoto
    }
})
