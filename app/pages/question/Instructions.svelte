<flexboxLayout flexDirection="column">
  <Header />
  <flexboxLayout class="instructions">
    <pager
      {items}
      selectedIndex={selectedIndex}
      height="600"
      showIndicator={false}
      disableSwipe={true}
      on:selectedIndexChange={handleSelectedIndex}
    >
      <Template let:item>
        <dockLayout height="100%" stretchLastChild="false">
          <flexboxLayout dock="top" class="instructions__carousel">
            {#each instructions as instruction}
              <flexboxLayout class="instructions__carousel__item" margin={10}>
                <label class="instructions__carousel__dot" text="•" marginRight={15}/>
                <label class="instructions__carousel__label" text="{instruction}" textWrap={true}/>
              </flexboxLayout>
            {/each}
          </flexboxLayout>
          <flexboxLayout dock="bottom" class="instructions__action-buttons">
            {#if selectedIndex > 0}
              <button text="Prev" prev={true} on:tap={handleNav}/>
            {/if}
            {#if items.length - 1 > selectedIndex}
              <button text="Next" next={true} on:tap={handleNav}/>
            {/if}

            {#if items.length - 1 === selectedIndex}
              <button text="Add Question"  on:tap={openActions}/>
            {/if}
          </flexboxLayout>
        </dockLayout>
      </Template>
    </pager>
  </flexboxLayout>
</flexboxLayout>

<script lang="ts">
  import { Template } from 'svelte-native/components'
  import { action } from '@nativescript/core/ui/dialogs'

  import { cameraPermissionsRequest, cameraTakeAPicture, selectImagesFromGallery } from '~/services/cameraService'

  import Header from '../common/Header.svelte'

  const items = [
    { title: 'First', color: '#e67e22' },
    { title: 'Second', color: '#3498db' },
    { title: 'Third', color: '#e74c3c' }
  ]

  const instructions = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas.'
  ]

  let selectedIndex = 0

  const handleSelectedIndex = e => {
    selectedIndex = parseInt(e.value)
  }

  const handleNav = (e) => {
    if (e.object.next) selectedIndex += 1
    if (e.object.prev) selectedIndex -= 1
  }

  const takePicture = async () => {
    const granted = await cameraPermissionsRequest()
    if (granted) {
      const picture = await cameraTakeAPicture()
      console.log(picture)
    }
  }

  const openGallery = async () => {
    const images = await selectImagesFromGallery()
    if (images) {
      console.log(images)
    }
  }

  const openActions = async () => {
    try {
      const result = await action('Choose a Option', 'Cancel', ['Open Gallery', 'Take a Picture'])
      if (result === 'Open Gallery') openGallery()
      if (result === 'Take a Picture') takePicture()
    } catch(err) {
      console.log(err)
    }
  }
</script>

<style lang="scss">
  .instructions {
    flex-direction: column;
    justify-content: center;
    margin: 10;

    pager {
      background-color: aqua;
    }

    &__carousel {
      height: 90%;
      border-radius: 10;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &__item {
        margin: 10;
      }

      &__dot {
        margin-right: 5;
        font-size: 24;
        font-weight: bold;
      }

      &__label {
        font-size: 14;
      }
    }

    &__action-buttons {
      justify-content: center;

      button {
        border-radius: 50%;
        height: 50;
        padding: 0 10;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
</style>