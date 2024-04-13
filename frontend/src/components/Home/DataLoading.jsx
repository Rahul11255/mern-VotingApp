import React from 'react'
import { RotatingLines} from 'react-loader-spinner'
import './voter/vote.css'


const DataLoading = () => {
  return (
    <div className='loadinguser' ><RotatingLines
  visible={true}
  height="50"
  width="50"
  color="grey"
  strokeWidth="3"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />Loading data</div>
  )
}

export default DataLoading