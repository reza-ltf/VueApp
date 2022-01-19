<template>
  <div>
    <h1>Press Request Button To Initiate Request</h1>
    <button @click="makeReq($event, url)">Send Req</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Requester",
  data: () => ({
    url: "https://jsonplaceholder.typicode.com/todos",
  }),
  methods: {
    makeReq: function ($event, url) {
      console.log($event);
      axios
        .get(url)
        .then((Response) => {
          this.$emit("responseData", Response.data);
        })
        .catch((e) => {
          console.warn(e);
        });
    },
  },
};
</script>