<template>
  <div class="w100p h100p overflow-h">
    <div class="chat-header w100p flex justify-between align-center bg-white h80 ph8 pos-fix">
      <div class="flex align-center">
        <div class="avatar-wrapper mr8 br50p overflow-h">
          <img class="h48 w48 br50p" src="img/babe.png" alt="avatar" />
        </div>
        <span class="f18 fw-bold">Crush</span>
      </div>
      <c-icon class="f32-imp" name="CloseBold" @click="close" />
    </div>
    <div class="chat-area h91p mt80">
      <div class="chat-room h85p ph8">
        <div class="message-wrap h100p flex flex-column pt8 overflow-a" >
          <div
            class="message-list maxw70p mb10"
            v-for="msg in messages" :key="msg.message"
            :class="{ 'me': msg.me }"
            ref="lastElement"
          >
            <div class="msg bg-white br5">
              {{ msg.message }}
            </div>
            <div class="time text-right f10">{{ msg.created_date.formatDate('hh:mm a') }}</div>
          </div>
        </div>
      </div>
      <div class="type-area flex align-center h64 w100p">
        <el-input
          type="textarea"
          class="w85p ma8"
          :input-style="{ 'outline': 'none' }"
          :autosize="{ minRows: 2, maxRows: 2 }"
          placeholder="Please input"
          v-model.trim="message"
          @keyup.enter="sendMessage"
        />
        <sp-icon name="send" class="f24" @click="sendMessage" />
      </div>
    </div>
  </div>
</template>

<script>

const messages = [
  {
    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit minus minima quo corporis.',
    me: false,
    created_date: Date.now()
  },
  {
    message: 'Lorem ipsum dolor sit amet.',
    me: true,
    created_date: Date.now()
  },
  {
    message: 'Odit minus minima quo corporis.',
    me: false,
    created_date: Date.now()
  },
  {
    message: 'Lorem.',
    me: true,
    created_date: Date.now()
  },
  {
    message: 'Lorem, ipsum dolor.',
    me: false,
    created_date: Date.now()
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam laudantium illum quidem? Iste hic doloribus quos non iure libero excepturi, praesentium in, blanditiis repellat labore illo, voluptas sed fugit consequatur dolorum assumenda ea nesciunt. Pariatur.',
    me: true,
    created_date: Date.now()
  },
  {
    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit minus minima quo corporis.',
    me: false,
    created_date: Date.now()
  },
  {
    message: 'Lorem, ipsum.',
    me: true,
    created_date: Date.now()
  },
  {
    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nulla doloribus dolore impedit dolorem hic ex dolor quo illo tenetur ab exercitationem atque iusto, voluptatibus quos.',
    me: false,
    created_date: Date.now()
  },
  {
    message: 'Lorem dolor sit',
    me: true,
    created_date: Date.now()
  }
]

export default {
  name: 'sp-chat',
  data() {
    return {
      message: '',
      messages
    }
  },
  mounted() {
    this.scrollIntoView()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    sendMessage() {
      if (this.message) {
        this.messages.push({
          message: this.message,
          me: Boolean(this.messages.length % 2),
          created_date: Date.now()
        })
        this.scrollIntoView()
        this.message = ''
      }
    },
    scrollIntoView() {
      this.$nextTick(() => {
        this.$refs.lastElement.last().scrollIntoView({ behavior: 'smooth' })
      })
    }
  }
}
</script>

<style lang="scss">
  .chat-room {
    min-height: 300px;
    background-color: #f7f9fb;
  }

  .message-wrap {
    flex: 1;

    .message-list {
      align-self: flex-start;

      &.me {
        align-self: flex-end;
        .msg {
          background: #bde2f7;
          color: #111;
        }
      }

      .msg {
        box-shadow: 0 5px 15px -5px rgba(0,0,0,.1);
        padding: 10px 5px;
      }

      .time {
        color: #999999;
      }
    }
  }

  .el-textarea__inner, .el-textarea__inner:focus {
    border: none;
    resize: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
