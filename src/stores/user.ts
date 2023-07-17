import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type User } from '@/types/User'


export const useAuthStore = defineStore('auth', () => {
    const isAuth = ref<boolean>(false)
    const login = () => {
        isAuth.value = true;
    }

    const logout = () => {
        isAuth.value = false;
    }

    return {
        isAuth,
        login,
        logout,
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

    const updateName = (name: string) => {
        user.value.name = name
    }

    const updateBio = (bio: string) => {
        user.value.bio = bio
    }

    const updatePhone = (phone: string) => {
        user.value.phone = phone
    }

    const updatePassword = (password: string) => {
        user.value.password = password
    }

    return {
        user,
        updateEmail,
        updatePhoto,
        updateName,
        updateBio,
        updatePhone,
        updatePassword
    }
})
