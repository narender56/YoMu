<page actionBarHidden={false}>
  <actionBar visibility="collapsed" title="Hello"></actionBar>
  <flexboxLayout flexDirection="column">
    <Header />
    <label class="option-header" text="Choose an Option" textWrap="true" />
    <flexboxLayout class="options" justifyContent="center">
      <flexboxLayout class="options__wrapper">
          {#each options as option}
            <stackLayout class="options__wrapper__option" on:tap={() => {
              navigate({ page: Subject, props: { option } })
            }}>
              <image class="options__wrapper__icon" src={option.icon}/>
              <label class="options__wrapper__name" text={option.name} />
            </stackLayout>
          {/each}
      </flexboxLayout>
    </flexboxLayout>
  </flexboxLayout>
</page>

<script lang="ts">
  import { navigate } from 'svelte-native'
  import Subject from './Subject.svelte'
  import Header from './common/Header.svelte'

  const options = [
    {
      icon: 'https://img.icons8.com/ios-filled/344/book.png',
      name: '10th'
    },
    {
      icon: 'https://img.icons8.com/office/2x/book.png',
      name: '9th'
    },
    {
      icon: 'https://img.icons8.com/glyph-neue/344/address-book.png',
      name: '8th'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/344/book.png',
      name: '7th'
    },
    {
      icon: 'https://img.icons8.com/office/2x/book.png',
      name: 'Btech 1-1'
    },
    {
      icon: 'https://img.icons8.com/glyph-neue/344/address-book.png',
      name: 'Btech 1-2'
    },
    {
      icon: 'https://img.icons8.com/glyph-neue/344/address-book.png',
      name: 'Btech 2-1'
    }
  ]
</script>

<style lang="scss">
  .option-header {
    margin: 20 0;
    font-size: 24;
    font-weight: bold;
    text-align: center;
  }

  .options {
    justify-content: center;
    
    &__wrapper {
      flex-wrap: wrap;

      &__option {
        margin: 10;
      }

      &__icon {
        height: 60;
        width: 60;
      }

      &__name {
        text-align: center;
        font-size: 14;
        font-weight: 400;
      }
    }
  }
</style>
