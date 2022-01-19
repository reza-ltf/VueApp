<template>
  <div>
    <h5>ID : {{ data && data.id }}</h5>
    <h5>Title : {{ data && data.title }}</h5>
    <h5>Completed : {{ data && data.completed }}</h5>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["data"],
};
</script>