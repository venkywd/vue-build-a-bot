<template>
  <div>
    <h2>Bases</h2>
    The Base is critical to the mobility of your robot. Be sure to choose a base that will work well with the terrain where your robot needs to operate.
    <div v-for="(base, idx) in parts.bases" :key="idx">
      <h4>{{base.title}}</h4>
      <div>{{base.description}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import getPartsMixin from './get-parts.mixin';

export default Vue.extend({
  name: 'RobotBases',
  data() {
    return {};
  },
  mixins: [getPartsMixin],
});
</script>
