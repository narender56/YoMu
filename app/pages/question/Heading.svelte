
<stackLayout class="question__box">
  <label class="question__box__label" text="Q1" textWrap="true" horizontalAlignment="left"/>
</stackLayout>
<stackLayout class="question__layer">
  <label class="question__layer__text" text={question} textWrap="true"/>
</stackLayout>

<script lang="ts">
  const question = 'If the average of 4, 8, and m is 10, what is the value of m ?'
</script>

<style lang="scss">
  .question {
    &__box {
      height: 30;
      background-color: #E5D9F9;
      border-radius: 4px;

      &__label {
        width: 50;
        height: 30;
        text-align: center;
        font-weight: bold;
        font-size: 16;
        color: #ffffff;
        background-color: #934FF9;
      }
    }

    &__layer {
      margin-top: 15;

      &__text {
        font-size: 18;
        font-weight: bold;
        font-style: italic;
      }
    }
  }
</style>