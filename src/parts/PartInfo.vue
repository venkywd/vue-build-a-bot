<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>{{part.description}}</div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this; //this.$route.params;
      return parts[partType].find(part => part.id === parseInt(id, 10));
    },
    data() {
      return {};
    },
  },
};
</script>

<style scoped>
</style>
