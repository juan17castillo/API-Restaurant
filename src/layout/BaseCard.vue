<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.card{
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(0,0,0,0.18);
    height: 560px;
    width: 380px;
}
</style>