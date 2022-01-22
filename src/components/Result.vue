<template>
  <div>
    <h5>ID : {{ result && result.id }}</h5>
    <h5>Title : {{ result && result.title }}</h5>
    <h5>Completed : {{ result && result.completed }}</h5>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["result"],
};
</script>