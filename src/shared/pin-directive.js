function applyStyle(element, binding) {
  element.style.position = 'absolute';
  Object.keys(binding.value).forEach(property => {
    element.style[property] = binding.value[property];
  });
}
export default {
  bind: (element, binding) => {
    applyStyle(element, binding);
  },
  update: (element, binding) => {
    applyStyle(element, binding);
  },
};

// This will use args and modifiers
// <span v-pin:position.top.right class="sale" v-show="selectedPart.onSale">Sale!</span>
// export default {
//   bind: (element, binding) => {
//     if (binding.arg !== 'position') {
//       return;
//     }
//     element.style.position = 'absolute';
//     Object.keys(binding.modifiers).forEach(key => {
//       element.style[key] = '5px';
//     });
//   },
// };
