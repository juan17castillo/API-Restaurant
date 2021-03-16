<template>
  <div class="container-cards">
    <div class="search_wrap search_wrap_3">
      <div class="search_box">
        <input
          type="text"
          class="input"
          placeholder="search..."
          v-model="query"
        />
        <div class="btn btn_common">
            <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
    <ul class="wrapper">
      <restaurant-item
        v-for="restaurant in filteredQuery"
        :key="restaurant.id"
        :id="restaurant.id"
        :name="restaurant.name"
        :phone="restaurant.phone"
        :email="restaurant.email"
        :website="restaurant.website"
        :iconUrl="restaurant.iconUrl"
      ></restaurant-item>
    </ul>
    <h1 v-if="filteredQuery===undefined">Ups! No hubo resultados</h1>
  </div>
</template>
<script>
import axios from "axios";
import RestaurantItem from "../components/RestaurantItem";
export default {
  components: { RestaurantItem },

  data() {
    return {
      apiUrl: "http://localhost:8000/api/restaurant/",
      query: "",
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
  computed: {
    filteredQuery() {
      console.log(this.filteredQuery);
      return this.restaurants.filter((restaurant) =>
        restaurant.name.includes(this.query)
      );
    },
  },
  methods: {
    loadRestaurants() {
      axios.get(this.apiUrl).then((res) => {
        const data = res.data;
        console.log(data);
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
  },
  created() {
    this.loadRestaurants();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap");

/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
} */

.container .input {
  border: 0;
  outline: none;
  color: #8b7d77;
}

.search_wrap {
  width: 500px;
  margin: 38px auto;
}

.search_wrap .search_box {
  position: relative;
  width: 500px;
  height: 60px;
}

.search_wrap .search_box .input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 18px;
  outline: none !important;
}

.search_wrap .search_box .btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  background: #3d008d;
  z-index: 1;
  cursor: pointer;
}

.search_wrap .search_box .btn:hover {
  background: #708bd2;
}

.search_wrap .search_box .btn.btn_common .fas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 20px;
}

.search_wrap.search_wrap_3 .search_box .input {
  padding-right: 80px;
}

.search_wrap.search_wrap_3 .search_box .input {
  border-radius: 50px;
}

.search_wrap.search_wrap_3 .search_box .btn {
  right: 0px;
  border-radius: 50%;
}
</style>