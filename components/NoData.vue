<template>
  <img src="~/assets/empty.svg" alt="no data" class="no-result">
</template>
<style>
.no-result {
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
