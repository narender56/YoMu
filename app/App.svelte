<page>
  <flexboxLayout flexDirection="column">
    <flexboxLayout justifyContent="center"  height="50" borderBottomColor="#eee" borderBottomWidth="1">
      <label class="logo" text="Hello" textWrap="true" />
    </flexboxLayout>
    {#if !showOtpLayout}
      <flexboxLayout class="login-form">
        <label class="label-1" text={_t('login.title_h1')} />
        <label class="label-2" text={_t('login.title_h2')} />
        <stackLayout orientation="horizontal">
          <textField
            class="country-code"
            hint="+91"
            text={countryCode}
            on:blur={handleCodeChange}
            maxLength="4"
            keyboardType="phone"
          /> 
          <textField
            class="phone-number"
            hint={_t('login.phone.hint')}
            text={phoneNumber}
            keyboardType="phone"
            maxLength="10"
          /> 
        </stackLayout>
        <button class="submit-button" on:tap={toggleOtp} text={_t('login.phone.send')} />
        <activityIndicator busy={inProgress} />
      </flexboxLayout>
    {/if}

    {#if showOtpLayout}
      <flexboxLayout class="otp-wrapper">
        <label class="label-1" text={_t('login.otp.title_h1')} />
        <label class="label-2" text={_t('login.otp.title_h2') + combined } />
        <flexboxLayout class="otp-box">
          <textField class="otp-number" maxLength="1" keyboardType="phone" />
          <textField class="otp-number" maxLength="1" keyboardType="phone" />
          <textField class="otp-number" maxLength="1" keyboardType="phone" />
          <textField class="otp-number" maxLength="1" keyboardType="phone" />
        </flexboxLayout>
        <button class="submit-button" on:tap={move} text={_t('login.otp.submit')}/>
        <activityIndicator busy={inProgress} />
      </flexboxLayout>
    {/if}
  </flexboxLayout>
</page>

<script lang="ts">
  import { navigate } from 'svelte-native'
  import { _t } from './services/i18n'

  import Home from './pages/Home.svelte'

  let phoneNumber = ''
  let countryCode = ''
  let combined = ''
  let showOtpLayout = false
  let inProgress = false

  $: {
    combined = countryCode + phoneNumber
  }

  const handleCodeChange = e => {
    if (!e.object.text) return

    if (e.object.text.includes('+')) {
      countryCode = e.object.text
      return
    }
    countryCode = '+' + e.object.text
  }

  const toggleOtp = () => {
    inProgress = true
    setTimeout(() => {
      inProgress = false
      showOtpLayout = !showOtpLayout
    }, 3000)
  }

  const move = () => {
    navigate({ page: Home })
  }
</script>

<style>
  .logo {
    font-size: 16;
  }

  .login-form {
    margin: 100 15 0 15;
    flex-direction: column;
    align-items: center;
  }

  .label-1 {
    font-size: 32;
    font-weight: bold;
  }

  .label-2 {
    font-size: 16;
    color: #A2A2A2;
    margin-bottom: 30;
  }

  .country-code {
    width: 15%;
    margin-left: 0;
    font-size: 16;
    placeholder-color: #A2A2A2;
  }

  .phone-number {
    width: 70%;
    font-size: 16;
    border-bottom-width: 1;
    border-bottom-color: #A2A2A2;
    padding: 10;
    outline: none;
    margin-left: 10;
    placeholder-color: #A2A2A2;
  }

  .submit-button {
    height: 40;
    background-color: #934FF9;
    color: #FFFFFF;
    border-radius: 50%;
    font-weight: bold;
    width: 100%;
  }

  .otp-wrapper {
    flex-direction: column;
    align-items: center;
    margin: 100 15 0 15;
  }

  .otp-box {
    justify-content: center;
  }

  .otp-number {
    width: 25;
    border-bottom-width: 3;
    border-bottom-color: #934FF9;
  }
</style>
