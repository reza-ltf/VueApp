<template>
  <div>
    <Requester @responseData="updateResponse" />
    <hr />
    <div v-if="response.length">
      <h3>Result:</h3>
      <Result v-for="item in response" :key="item.userId" :data="item" />
    </div>
  </div>
</template>

<script>
import Requester from "./Requester.vue";
import Result from "./Result.vue";

export default {
  name: "Container",
  data: () => ({
    response: [],
  }),
  components: {
    Requester,
    Result,
  },
  methods: {
    updateResponse: function (data) {
      this.response = data;
    },
  },
};
</script>