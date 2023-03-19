<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name: 'home'}">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#appNavbar" aria-controls="appNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="appNavbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name: 'home'}" class="nav-link" aria-current="page">Home</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li v-if="isAuthenticated" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ user.username }}
          </a>
          <ul class="dropdown-menu">
            <li><router-link :to="{name: 'user'}" class="dropdown-item">Profile</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><button @click="logout" class="dropdown-item btn btn-danger">Logout</button></li>
          </ul>
        </li>
        <template v-else>
          <li class="nav-item">
            <router-link :to="{name: 'login'}" class="nav-link" aria-current="page">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'register'}" class="nav-link" aria-current="page">Register</router-link>
          </li>
        </template>
        
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()

const router = useRouter()

const user = computed(()=>{
  return authStore.user
})

const isAuthenticated = computed(()=>{
  return authStore.isAuthenticated
})

async function logout(){
  await authStore.logout()
    .then( res => {
      router.replace({name: 'home'})
    })
    .catch(err => {
      console.log(err.message)
    })
}

</script>