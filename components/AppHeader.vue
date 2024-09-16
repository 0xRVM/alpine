<script lang="ts" setup>
const alpine = useAppConfig().alpine

const show = ref(false)
</script>

<template>
  <header :class="alpine.header.position || 'left'">
    <div class="menu">
    </div>

    <div class="overlay" :class="[show && 'show']">
      <MainNav @link-click="show = !show" />
    </div>

<div class="logo" style="display: block !important;">
<img src="/primatelogo-blanco.png" alt="Logo Primate Blanco" width="120" height="60" style="display: block;" />

</div>



    <div class="main-nav">
      <div class="main-nav">
  <!-- MainNav removido temporalmente -->
</div>

      <MainNav />
    </div>
  </header>
</template>

<style scoped lang="ts">
css({
  header: {
    '--header-padding': '{space.16}',
    '--logo-height': '{space.8}',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    alignItems: 'center',
    gap: '{space.4}',
    py: 'var(--header-padding)',
    '.menu': {
      position: 'absolute',
      display: 'flex',
      ':hover': {
        color: '{color.primary.500}',
      },
      '.left &&': {
        right: 0
      },
      '@sm': {
        display: 'none'
      }
    },
    '.logo': {
      display: 'flex',
      justifyContent: 'center',
      height: 'var(--logo-height)',
      a: {
        display: 'flex',
      },
    },
    '.main-nav': {
      display: 'none',
      '@sm': {
        display: 'flex',
        gridColumn: 'span 8 / span 8',
        fontSize: '{text.xl.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
        fontWeight: '{fontWeight.medium}',
      }
    },
  }
})
</style>
