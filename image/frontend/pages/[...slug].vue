<template>
  <div>
    <p>
      這裡是404頁面。
      很抱歉，找不到你要的頁面。
      請檢查網址是否正確或返回主頁。
    </p>
    <p>
      {{ $route.params.slug }}
    </p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>