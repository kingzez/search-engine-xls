<template>
  <img src="~/assets/logo.svg" alt="logo" class="logo">
</template>
<style>
.logo {
  animation: 1s appear;
  margin: auto;
  width: 245px;
  /* height: 180px; */
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
