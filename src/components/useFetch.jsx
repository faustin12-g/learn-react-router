import {useState, useEffect} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(()=>{
    fetch(url)
    .then(res=>{
      if(!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    })
    .then(result=>{
      setData(result)
      setLoading(false)
      
  })
    .then(()=>setLoading(false))
    .catch(err=>{
      setError(err.message)
      setLoading(false)
    })
  },[url])
  return ({data, loading, error})
}

export default useFetch
