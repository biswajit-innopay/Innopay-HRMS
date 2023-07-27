import axios from 'axios'
export function getNavbarData(setLoading) {
  axios({
    method: 'get',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: 'http://localhost:5002/nav',
  })
    .then(function (response, setNavData) {
      setNavData(response.data)
      setLoading(false)
    })
    .catch(function (error) {
      console.log(error)
    })
}
