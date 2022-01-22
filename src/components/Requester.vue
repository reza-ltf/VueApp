<template>
  <div>
    <h1>Press Request Button To Initiate Request</h1>
    <button @click="makeReq(url)">Send Req</button>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "Requester",
  data: () => ({
    url: "https://jsonplaceholder.typicode.com/todos",
  }),
  methods: {
    ...mapActions(["updateListData"]),
    makeReq: function (url) {
      axios
        .get(url)
        .then((Response) => {
          this.updateListData(Response.data);
        })
        .catch((e) => {
          console.warn(e);
        });
    },
  },
};
</script>