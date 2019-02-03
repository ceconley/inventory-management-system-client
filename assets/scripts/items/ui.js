const showItemsTemplate = require('../templates/item-listing.handlebars')
const showOneItemTemplate = require('../templates/single-item-listing.handlebars')
const confirmDelete = require('../templates/delete-confirm.handlebars')
const api = require('./api.js')

const resetForms = () => {
  $('#show-item')[0].reset()
  $('#create-item')[0].reset()
  $('#delete-item')[0].reset()
  $('#update-item')[0].reset()
  $('#results').text('')
}

const showSuccess = (response) => {
  resetForms()
  const showItemsHtml = showOneItemTemplate({ item: response })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('Item:')
}

const showFailure = () => {
  resetForms()
  $('#results-message').text('Show Inventory Failed')
}

const showForDeleteSuccess = (response) => {
  const showItemsHtml = confirmDelete({ item: response.item })
  console.log(response.item)
  $('#delete-confirm').empty()
  $('#delete-confirm').append(showItemsHtml)
}

const showForDeleteFailure = () => {
  resetForms()
  $('#results-message').text('Error deleting item')
}

const indexSuccess = (response) => {
  resetForms()
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('')
}

const indexSuccess1 = (response) => {
  resetForms()
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  $('#results').append(showItemsHtml)
}

const indexFailure = () => {
  resetForms()
  $('#results-message').text('Could Not Retrieve Inventory')
}

const deleteSuccess = () => {
  resetForms()
  $('#results-message').text('Item Deleted Successfully')
  api.indexItemsTwo()
    .then(indexSuccess1)
    .catch(indexFailure)
}

const deleteFailure = () => {
  resetForms()
  $('#results-message').text('Error deleting item')
  $('.forms').val('')
}

const updateSuccess = () => {
  resetForms()
  $('#results-message').text('Item successfully updated')
  api.showItem()
    .then(showSuccess)
    .catch(showFailure)
}

const updateFailure = () => {
  resetForms()
  $('#results-message').text('Could Not Update Item')
}

const createSuccess = (data) => {
  resetForms()
  const showItemsHtml = showOneItemTemplate({ item: data })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('Item Successfully Created')
}

const createFailure = () => {
  $('#results-message').text('Create Item Failed')
  resetForms()
}

module.exports = {
  showSuccess,
  showFailure,
  showForDeleteSuccess,
  showForDeleteFailure,
  indexSuccess,
  indexFailure,
  deleteSuccess,
  deleteFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  indexSuccess1
}
