'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onShowItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.itemId = data.id
  api.showItem()
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onShowForDeleteItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.itemId = data.item.id
  console.log(store.itemId)
  api.showItem()
    .then(ui.showForDeleteSuccess)
    .catch(ui.showForDeleteFailure)
}

const onIndexItems = event => {
  event.preventDefault()
  api.indexItems()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onCreateItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onDeleteItem = () => {
  const data = store.itemId
  api.deleteItem(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
}

const onUpdateItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.itemId = data.item.id
  api.updateItem(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

module.exports = {
  onShowItem,
  onShowForDeleteItem,
  onIndexItems,
  onCreateItem,
  onDeleteItem,
  onUpdateItem
}
