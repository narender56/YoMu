<dockLayout stretchLastChild="false">
  <flexboxLayout dock="top" flexDirection="column">
    <Header />
    <flexboxLayout class="question">
      <Heading />
      {#each questionOptions as option}
        <absoluteLayout class="question__options" verticalAlignment="center">
          <label class="question__options__label" text="{option.label})"/>
          <label class="question__options__value" top="1" left="30" text={option.value}/>
        </absoluteLayout>
      {/each}
    </flexboxLayout>
    <flexboxLayout class="action-buttons">
      <button text="Find out solution" on:tap={gotoAnswer}/>
      <button text="Watch explanation" />
    </flexboxLayout>
  </flexboxLayout>
  <flexboxLayout dock="bottom" class="nav-buttons">
    <image src="~/img/icons/left-arrow.png" />
    <image src="~/img/icons/right-arrow.png" />
  </flexboxLayout>
</dockLayout>

<script lang="ts">
  import { navigate } from 'svelte-native'
  
  import Header from '../common/Header.svelte'
  import Heading from './Heading.svelte'
  import Math from '../answer/Math.svelte'

  const questionOptions = [
    {
      label: 'A',
      value: '6',
      correct: false
    },
    {
      label: 'B',
      value: '8',
      correct: false
    },
    {
      label: 'C',
      value: '12',
      correct: false
    },
    {
      label: 'D',
      value: '18',
      correct: true
    }
  ]

  const gotoAnswer = () => {
    navigate({ page: Math })
  }
</script>

<style lang="scss">
  .question {
    flex-direction: column;
    justify-content: center;
    margin: 10;

    &__options {
      margin: 10 20;
      vertical-align: middle;

      &__label {
        font-size: 16;
        font-weight: bold;
      }

      &__value {
        font-size: 14;
        font-weight: 600;
      }
    }
  }

  .action-buttons {
    justify-content: space-between;

    button {
      height: 50;
      padding: 0 20;
      color: #934FF9;
      border-width: 2;
      border-color: #934FF9;
      border-radius: 50%;
      text-transform: uppercase;
      font-size: 10;
      font-weight: bold;
    }
  }

  .nav-buttons {
    justify-content: space-between;

    image {
      height: 30;
      margin-bottom: 20;
    }
  }
</style>