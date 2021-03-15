<template>
  <ul class="wrapper">
    <restaurant-item
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :id="restaurant.id"
      :name="restaurant.name"
      :phone="restaurant.phone"
      :email="restaurant.email"
      :website="restaurant.website"
      :iconUrl="restaurant.iconUrl"
    ></restaurant-item>
  </ul>
</template>
<script>
import axios from "axios";
import RestaurantItem from "../components/RestaurantItem";
export default {
  components: { RestaurantItem },
  data() {
    return {
      apiUrl: "http://localhost:8000/api/restaurant/",
      restaurants: [],
      restaurant: {
        id: "",
        name: "",
        phone: "",
        email: "",
        website: "",
        iconUrl: "",
      },
    };
  },
  created() {
    axios.get(this.apiUrl).then((res) => {
      const data = res.data;
      for (const key in data) {
        this.restaurant = {
          id: data[key].id,
          name: data[key].name,
          phone: data[key].phone,
          email: data[key].email,
          website: data[key].website,
          iconUrl: data[key].iconUrl,
        };
        this.restaurants.push(this.restaurant);
      }
    });
  },
};
</script>
<style>
</style>