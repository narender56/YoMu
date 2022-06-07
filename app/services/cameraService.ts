import { requestPermissions, takePicture, isAvailable } from '@nativescript/camera'
import { create } from '@nativescript/imagepicker'

const defaultCameraOptions = () => ({
  width: 300,
  height: 300,
  keepAspectRatio: false,
  saveToGallery: true,
  cameraFacing: 'rear',
  allowsEditing: true
})

const defaultGalleryOptions = () => ({ mode: 'multiple' })

export const checkIfCameraAvailable = () => isAvailable()

export const cameraPermissionsRequest = async () => {
  try {
    await requestPermissions()
    return true
  } catch(err) {
    console.log('Failed to access camera', err)
  }
  return false
}

export const cameraTakeAPicture = async (options = {}) => {
  options = { ...defaultCameraOptions(),  ...options }
  try {
    return await takePicture(options)
  } catch(err) {
    console.log(err.message)
  }

  return null
}

export const selectImagesFromGallery = async (options = {}) => {
  options = { ...defaultGalleryOptions(), ...options }
  try {
    const context = create(options)
    await context.authorize()

    return await context.present() // returns selected images
  } catch(err) {
    console.log('Failed to select images from gallery, ', err.message)
  }

  return null
}

