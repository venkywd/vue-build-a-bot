<template>
  <div class="content" v-if="availableParts">
    <PreviewCart :selectedRobot="selectedRobot" @addToCart="addToCart()" />
    <div class="top-row">
      <PartSelector :parts="availableParts.heads" position="top" @partSelected="part => selectedRobot.head = part" />
    </div>
    <div class="middle-row">
      <PartSelector :parts="availableParts.arms" position="left" @partSelected="part => selectedRobot.rightArm = part" />
      <PartSelector :parts="availableParts.torsos" position="center" @partSelected="part => selectedRobot.torso = part" />
      <PartSelector :parts="availableParts.arms" position="right" @partSelected="part => selectedRobot.leftArm = part" />
    </div>
    <div class="bottom-row ">
      <PartSelector :parts="availableParts.bases" position="bottom" @partSelected="part => selectedRobot.base = part" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import availableParts from '../data/parts';
import createdHookedMixin from './created-hook.mixin';
import PartSelector from './PartSelector.vue';
import PreviewCart from './PreviewCart.vue';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      // availableParts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
      addedToCart: false,
    };
  },
  components: { PartSelector, PreviewCart },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      const response = confirm(
        'you have not added your robot to your cart, are you sure you want to leave?'
      );
      next(response);
    }
  },
  mixins: [createdHookedMixin],
  beforeCreate() {
    console.log('*** lifecycle: beforeCreate');
  },
  created() {
    this.getParts(); // mapActions helper gives us this shortcut
    // this.$store.dispatch('robots/getParts');
  },
  beforeMounted() {
    console.log('*** lifecycle: beforeMounte');
  },
  mounted() {
    console.log('*** lifecycle: mounted');
  },
  beforeUpdate() {
    console.log('*** lifecycle: beforeUpdate');
  },
  updated() {
    console.log('*** lifecycle: updated');
  },
  beforeDestroy() {
    console.log('*** lifecycle: beforeDestroy');
  },
  destroyed() {
    console.log('*** lifecycle: destroyed');
  },

  computed: {
    availableParts() {
      return this.$store.state.robots.parts;
    },
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? '3px solid red'
          : '3px solid #aaa',
      };
    },
  },

  methods: {
    ...mapActions('robots', ['getParts', 'addRobotToCart']),
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.rightArm.cost +
        robot.base.cost;
      // mapActions helper allows this shortcut
      this.addRobotToCart({ ...robot, cost }).then(() =>
        console.log('item added to the cart!')
      );

      // this.$store
      //   .dispatch('robots/addRobotToCart', { ...robot, cost })
      //   .then(() => console.log('item added to the cart!'));

      // this.$store.commit('addRobotToCart', { ...robot, cost }); // calls mutation
      // this.cart.push({ ...robot, cost });

      this.addedToCart = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

.content {
  position: relative;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
  img {
    width: 165px;
  }
}

.top-row {
  @include top-row;
}
.middle-row {
  @include middle-row;
}
.bottom-row {
  @include bottom-row;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.sale {
  color: red;
}
.sale-border {
  border: 3px solid red;
}
</style>
