<template>
  <li>
    <base-card>
      <div class="container">
        <img :src="iconUrl" alt="restaurant" />
      </div>
      <div class="details">
        <div class="title">
          <h3 class="name">{{ name }}</h3>
          <h4 class="id">ID: {{ id }}</h4>
        </div>
        <div class="details-card">
          <p><i class="fas fa-envelope"></i> {{ email }}</p>
          <p><i class="fas fa-globe-asia"></i> {{ website }}</p>
          <p><i class="fas fa-phone"></i> {{ phone }}</p>
        </div>
      </div>
    </base-card>
  </li>
</template>
<script>
export default {
  props: ["id", "name", "phone", "email", "website", "iconUrl"],
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
img {
  width: 100%;
  display: block;
  border-radius: 20px 20px 0 0;
}
.container:after {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px 20px 0 0;
  opacity: 0.7;
}
.details > h3 {
  color: #3d008d;
  font-weight: 600;
  font-size: 30px;
  margin: 16px 0px 13px 10px;
}
p {
  color: #a0a0a0;
  font-size: 18px;
  font-family: "Ubuntu", sans-serif;
}

.details-card {
  padding-top: 55px;
  padding-left: 20px;
  padding-bottom: 20px;
  margin: 0;
}

.container {
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

li {
  list-style-type: none;
}
.name {
  font-family: "Ubuntu", sans-serif;
  color: #3d008d;
  float: left;
  padding-left: 10px;
  font-size: 23px;
  position: absolute;
}
.id {
  font-family: "Ubuntu", sans-serif;
  float: right;
  padding-right: 10px;
  color: #a0a0a0;
}

.fas {
  color: #3d008d;
}
</style>