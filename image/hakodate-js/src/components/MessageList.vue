<template>
  <div id="app2">

    <h2>{{ options.title }}</h2>
    <p>用戶：{{ options.user.name }},
      <span v-if="options.user.active">活躍</span>
      <span v-else>不活躍</span>
    </p>
    <button @click="newTitle">修改標題</button>
    <button @click="changeUserName">修改用戶</button>

    <h1>Message List</h1>
    <input type="text" v-model.lazy="searchTerms" placeholder="輸入任意字">
    <ul>
      <li v-for="msg in filteredMessages" :key="msg.id">
        <p>{{ msg.content }}</p>
        <p>{{ msg.timestamp }}</p>
      </li>
    </ul>
    <button @click="deleteAllMessages">delete all messages</button>
    <!-- <input type="text" v-model="content">
    <p>
      Word Count: {{ count }}
    </p> -->


  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue'

  const content = ref('')
  const searchTerms = ref('')

  // function changeTheNewTitle() {
  //   options.title = 'LA.2028.消息列表'
  // }

  const newTitle = () => {
    options.value.title = 'LA.28.消息列表' + Math.floor(Math.random() * 1000)
  }
  const changeUserName = () => {
    options.value.user.name = '王五' + Math.floor(Math.random() * 100)
  }

  const options = ref({
    title: '舊~消息列表',
    user: {
      name: 'ROSSI.BLACK',
      active: true,
    }
  })

  watch([() => options.value.title, () => options.value.user.name],
    (newVals, oldVals) => {
      console.log(newVals, oldVals)
    })

  // watch(() => options.value.title, (newVal, oldVal) => {
  //   console.log('title changed', newVal, oldVal)
  // })

  // watch(() => options.value.user.name, (newVal, oldVal) => {
  //   console.log('user changed', newVal, oldVal)
  // }, { deep: true })

  // watch(() => JSON.parse(JSON.stringify(options.value)), (newVal, oldVal) => {
  //   console.log('options changed', newVal, oldVal, newVal === oldVal)
  // }, { deep: true })

  watch(searchTerms, (newVal, oldVal) => {
    console.log('searchTerms changed', newVal, oldVal)
  })

  const filteredMessages = computed(() => {
    return messages.value.filter(msg => {
      return msg.content.includes(searchTerms.value)
    })
  })

  const count = computed(() => content.value.length)

  const deleteAllMessages = () => {
    messages.value = []
  }

  const messages = ref([
    {
      id: 1,
      content: 'msg 1',
      timestamp: new Date()
    },
    {
      id: 2,
      content: 'msg 2',
      timestamp: new Date()
    },
    {
      id: 3,
      content: 'msg 3',
      timestamp: new Date()
    }
  ])

  // console.log(messages.value)

</script>

<style scoped>

  #app2 {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
  }

  input,
  select {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: rgb(84, 12, 12);
  }


  body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#212943 0.6000000000000001px,
        #0f141c 0.6000000000000001px);
    background-size: 12px 12px;
    color: white;
  }

  button {
    border: none;
    background: linear-gradient(90deg,
        hsl(240deg, 50%, 50%),
        hsl(280deg, 50%, 50%));
    padding: 1em 2em;
    margin-top: 24px;
    border-radius: 4px;
    color: white;
  }


  div {
    display: grid;
    place-items: center;
  }

  h2 {
    color: hsl(280deg, 50%, 70%);
  }

  p {
    margin: 12px 0 24px 0;
  }

  ul {
    list-style: none;
    display: grid;
    gap: 24px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  li::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: hsl(280deg, 100%, 70%);
    border-radius: 100%;
  }


</style>