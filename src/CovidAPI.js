const API = 'https://covidtracking.com/api/v1/'

const get = (url) =>
  fetch(API + url, { method: 'GET' })
    .then((response) => response.json())
    .catch((err) => console.log(err))

export const getCurrentInfo = () => get('states/current.json')
export const getStateInfo = (abbr) => get(`states/${abbr}/current.json`)
