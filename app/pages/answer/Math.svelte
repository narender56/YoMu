<page>
  <flexboxLayout flexDirection="column">
    <Header />
    <flexboxLayout class="answer">
      <Heading />
      <label class="answer__header" text="Solution:" />
      <flexboxLayout>
        {#each answer as ans, index}
          <stackLayout>
            <label class="answer__step" text="Step {index + 1}" />
            {#if ans.description}
              <label class="answer__description" text={ans.description} textWrap="true" />
            {/if}
            {#if ans.snippet}
              <stackLayout isUserInteractionEnabled="false">
                <webView src={ans.snippet} height="50"></webView>
              </stackLayout>
            {/if}
          </stackLayout>
        {/each}
      </flexboxLayout>
    </flexboxLayout>
  </flexboxLayout>
</page>

<script lang="ts">
  import katex from 'katex'
  import Header from '../common/Header.svelte'
  import Heading from '../question/Heading.svelte'

  const katexString = katex.renderToString('c = \\pm\\sqrt{a^2 + b^2}', { throwOnError: false })

  const snippet = `
    <!DOCTYPE html>
    <html>
      <style>
        .katex, .katex-html, .katex-display, .katex-mathml {
          overflow: hidden !important;
        }

        svg {
          width: 100%;
          max-width: 100%
        }
      </style>
      <body>
        ${katexString}
      </body>
    </html>
  `

  const answer = [
    {
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum accusantium commodi quod voluptates natus modi quaerat consequatur adipisci voluptatibus minus.',
      snippet
    }
  ]
</script>

<style lang="scss">
  .answer {
    flex-direction: column;
    justify-content: center;
    margin: 10;

    &__header {
      color: #2EC52B;
      font-size: 14;
      font-weight: bold;
      margin-top: 10;
    }

    &__step {
      font-size: 12;
      font-weight: bold;
    }

    &__description {
      margin-left: 10;
    }
  }
</style>