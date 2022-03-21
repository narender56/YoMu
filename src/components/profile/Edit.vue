<template>
  <div class="profile-edit h100p pa16">
    <el-form class="pos-rel h100p" label-position="top" :model="user" ref="profileForm" :rules="formRules" label-width="100px">
      <div class="flex flex-wrap justify-between">
        <div class="pos-rel" v-for="(image, index) in user.images" :key="image.url">
          <el-avatar
            class="pointer"
            shape="square"
            :size="80"
            fit="scale-down"
            :src="image.url"
            @click="addImage(image, index)"
          />
          <c-icon v-if="!image.default" class="f16-imp pos-abs-imp top0 right0" name="Close" @output="removeImage(image, index)" />
        </div>
      </div>
      <el-form-item class="mb0" label="Name" prop="name">
        <c-input :value="user.name" />
      </el-form-item>
      <el-form-item class="mb0" label="Age" prop="age">
        <c-input :value="user.age" disabled/>
      </el-form-item>
      <el-form-item label="What you do?" prop="desc">
        <el-input
          type="textarea"
          placeholder="what's going on your mind now?"
          v-model="user.desc"
          :autosize="{ minRows: 3, maxRows: 3 }"
        />
      </el-form-item>
      <div class="w100p flex justify-between pos-abs bottom0">
        <c-icon class="f32-imp" name="ArrowLeftBold" @click="close" />
        <c-icon class="f32-imp" name="Check" @click="onSubmit" />
      </div>
    </el-form>
  </div>
</template>

<script>
const defaultProfileUrl = 'https://i.pinimg.com/originals/5b/0f/5f/5b0f5f508504e143948a6d3595745206.png'

export default {
  name: 'sp-edit',
  data() {
    return {
      user: {
        name: 'Daria Andrusiv',
        age: 23,
        images: [
          {
            url: defaultProfileUrl,
            default: true
          },
          {
            url: defaultProfileUrl,
            default: true
          },
          {
            url: defaultProfileUrl,
            default: true
          },
          {
            url: defaultProfileUrl,
            default: true
          },
          {
            url: defaultProfileUrl,
            default: true
          },
          {
            url: defaultProfileUrl,
            default: true
          }
        ]
      },
      formRules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
        ],
        age: []
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    removeImage(image, index) {
      image.defalut = true
    },
    addImage(image, index) {
      image.defalut = false
    },
    onSubmit() {
      this.$refs['profileForm'].validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>

<style lang="scss">
  .el-date-editor {
    width: 100% !important;
  }

  .profile-edit .el-form-item__label {
    padding: 0;
  }
</style>
