<template>
  <div class="project">
    {{ data }}
  </div>
</template>
<script>
export default {
  name: "Project",
  component: true,
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
