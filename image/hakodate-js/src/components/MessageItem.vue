<template>
  <div>
    <p>{{ sender }}</p>
    <span>
      {{ time }}
    </span>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'MessageItemVue',
    props: {
      msg: {
        type: String,
        required: true
      },
      time: {
        type: Date,
        default: new Date(),
        required: true
      },
      sender: {
        type: String,
        required: true
      }
    },
    mounted() {
      // console.log('MessageItem.vue mounted')
      console.log(this.sender)
    }
  }
</script>

<style scoped>
  div {
    display: grid;
    grid-template-areas:
      "sender time"
      "msg msg";
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    padding: 1em;
    width: 250px;
  }

  span {
    justify-self: end;
  }

  div>p:last-child {
    margin-top: 1em;
  }

</style>