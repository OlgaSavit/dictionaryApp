const ToastTypes = {
  normal: 'normal',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  custom: 'custom'
}
const WordStatusTypes = {
  new: 'status.new',
  translate: 'status.translate',
  write: 'status.write',
  done: 'status.done'
}
const WordStatusList = [
  {
    value: 'new',
    label: WordStatusTypes.new
  },
  {
    value: 'translate',
    label: WordStatusTypes.translate
  },
  {
    value: 'write',
    label: WordStatusTypes.write
  },
  {
    value: 'done',
    label: WordStatusTypes.done
  }
]
export {ToastTypes, WordStatusTypes, WordStatusList}
