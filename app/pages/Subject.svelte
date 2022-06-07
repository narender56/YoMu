<page actionBarHidden={false}>
  <actionBar visibility="collapsed" title="Hello"></actionBar>
  <flexboxLayout flexDirection="column">
    <Header />
    <label class="option-header" text="Choose a Subject" textWrap="true" />
    <flexboxLayout class="options" justifyContent="center">
      <flexboxLayout class="options__wrapper">
        {#each subjects as subject}
            <stackLayout class="options__wrapper__option" on:tap={goToQuestion}>
              <image class="options__wrapper__icon" src={subject.icon}/>
              <label class="options__wrapper__name" text={subject.name} />
            </stackLayout>
          {/each}
      </flexboxLayout>
    </flexboxLayout>
  </flexboxLayout>
</page>

<script lang="ts">
  import { navigate } from 'svelte-native';

  import Header from './common/Header.svelte'
  import Question from './question/index.svelte'

  const subjects = [
    {
      icon: 'https://img.icons8.com/ios-filled/344/book.png',
      name: 'Maths'
    },
    {
      icon: 'https://img.icons8.com/office/2x/book.png',
      name: 'Physics'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/344/book.png',
      name: 'Chemistry'
    },
    {
      icon: 'https://img.icons8.com/office/2x/book.png',
      name: 'English'
    },
  ]

  const goToQuestion = () => {
    navigate({ page: Question })
  }
</script>

<style lang="scss">
  .back-btn {
    width: 45%;
    font-size: 32;
  }

  .logo {
    font-size: 16;
    font-weight: bold;
  }

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
        height: 120;
        width: 120;
      }

      &__name {
        text-align: center;
        font-size: 14;
        font-weight: 400;
      }
    }
  }
</style>
