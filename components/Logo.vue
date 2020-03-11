<template>
  <img src="~/assets/logo.svg" alt="logo" class="logo" width="245" height="180">
</template>
<style>
.logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
