<script setup lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth'
import FontAwesomeIcon from '@/components/FontAwesomeIcon.vue'
import { type Ref, ref } from 'vue'
import { LogoVideo } from '@/components'
import { useRouter } from 'vue-router'
import { useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth()
const router = useRouter()

type Data = {
  password: string | null
  email: string | null
}

let data: Data = {
  password: null,
  email: null
}

type Error = {
  password: string | null
  email: string | null
}

let error: Ref<Error> = ref({
  password: null,
  email: null
})

let login = () => {
  if (!data.email) {
    error.value = { ...error.value, email: 'please define email' }
  }
  if (!data.password) {
    error.value = { ...error.value, password: 'please define password' }
  }
  if (!auth || !data.email || !data.password) return
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => router.push('/'))
    .catch(() => (error.value = { ...error.value, email: 'email or password is incorrect' }))
}
</script>

<template>
  <form @submit.prevent="login" class="card">
    <div class="header">
      <LogoVideo class="logo" :size="60" />
      <h1>Log in</h1>
    </div>
    <div class="input-container">
      <FontAwesomeIcon icon="user" />
      <div class="input">
        <input type="email" placeholder="Email" v-model="data.email" @input="error.email = null" />
        <sub>{{ error.email }}</sub>
      </div>
    </div>
    <div class="input-container">
      <FontAwesomeIcon icon="lock" />
      <div class="input">
        <input
          type="password"
          placeholder="Password"
          v-model="data.password"
          @input="error.email = null"
        />
        <sub>{{ error.password }}</sub>
      </div>
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2.5rem;
}
.card {
  margin: auto;
  max-width: 500px;
  background: #ffffff;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.input-container {
  display: flex;
}

.input-container * {
  margin: 0 0.25rem;
}

.input {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input sub {
  min-height: 1.5rem;
  color: red;
  text-transform: capitalize;
  font-size: 0.75rem;
}

.input-container input {
  display: inline;
  width: 100%;
}

.card h1 {
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
}

.card button {
  margin: auto;
}
</style>
