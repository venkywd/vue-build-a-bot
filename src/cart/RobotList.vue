<template>
  <table>
    <thead>
      <tr>
        <th class="robot-title">
          Robot
        </th>
        <th class="cost">
          Cost
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(robot, index) in items" :key="index">
        <td class="robot-title">
          {{robot.head.title}}
        </td>
        <td class="cost">
          {{robot.cost | currency('$')}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
