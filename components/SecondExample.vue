<template>
  <div>
    This example does not work as expected
  </div>
</template>

<script>
export default {
  methods: {
    emitEvent() {
      this.$emit('example', 1, 2)
    }
  }
}
</script>