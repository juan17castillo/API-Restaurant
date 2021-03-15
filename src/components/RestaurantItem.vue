<template>
  <li>
    <base-card>
    <img :src=iconUrl alt="" class="logo">
    <br>
    <h2>{{id}}</h2>
    <h1>{{name}}</h1>
    <p>{{phone}}</p>
    <i class="fas fa-phone"></i>
    <p>{{email}}</p>
    <p>{{website}}</p>
    </base-card>
  </li>
</template>
<script>
export default {
  props: ["id", "name", "phone", "email", "website", "iconUrl"],
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border-radius: 12px;
  padding: 1rem;
  list-style-type: none;
}
h3 {
  font-size: 1.5rem;
}
h3,
h4 {
  margin: 0.5rem 0;
}
div {
  margin: 0.5rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}

.logo {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 120px;
    width: 120px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
}
</style>