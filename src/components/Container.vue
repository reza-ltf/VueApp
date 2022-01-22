<template>
  <div>
    <Requester />
    <hr />
    <div>
      <h3>Result:</h3>
      <div v-if="getListData">
        <Result v-for="item in getListData" :key="item.id" :result="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Requester from "./Requester.vue";
import Result from "./Result.vue";
import { mapGetters } from "vuex";

export default {
  name: "Container",
  data: () => ({
    list: null,
  }),
  components: {
    Requester,
    Result,
  },
  computed: {
    ...mapGetters(["getListData"]),
  },
};
</script>