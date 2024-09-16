<script lang="ts" setup>
const alpine = useAppConfig().alpine

const show = ref(false)
</script>

<template>
  <header :class="alpine.header.position || 'left'" style="display: flex; justify-content: center;">
    <div class="logo">
      <NuxtLink to="/">
        <img src="/articles/primatelogo-blanco.png" alt="Logo Primate Blanco" width="120" height="60" style="display: block;" />
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped lang="ts">
css({
  header: {
    '--header-padding': '{space.16}',
    '--logo-height': '{space.8}',
    display: 'grid',
    alignItems: 'center',
    gap: '{space.4}',
    py: 'var(--header-padding)',
    '.logo': {
      display: 'flex',
      justifyContent: 'center',
      height: 'var(--logo-height)',
      a: {
        display: 'flex',
      },
    }
  }
})
</style>

