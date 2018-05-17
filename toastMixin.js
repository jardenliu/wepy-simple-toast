import wepy from 'wepy'

export default class toastMixin extends wepy.mixin {
  $successTip(title, options) {
    this.$invoke(this.toastTagName || 'toast', 'success', title, options)
  }

  $errorTip(title, options) {
    this.$invoke(this.toastTagName || 'toast', 'error', title, options)
  }

  $warningTip(title, options) {
    this.$invoke(this.toastTagName || 'toast', 'waring', title, options)
  }

  $infoTip(title, options) {
    this.$invoke(this.toastTagName || 'toast', 'info', title, options)
  }
}
