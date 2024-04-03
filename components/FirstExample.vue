<template>
  <div>
    This example works as expected
  </div>
</template>

<script>
export default {
  methods: {
    emitEvent() {
      this.$emit('example', 1)
    }
  }
}
</script>