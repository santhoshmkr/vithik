import React, { useContext } from 'react'
import { Themecontext } from '../../App'

const Second = () => {

    const theme=useContext(Themecontext)

    const switchTheme=()=>{
        if(theme.theme){
            theme.setTheme(false)
        }else{
            theme.setTheme(true)
        }
    }
  return (
    <div>

        <button onClick={switchTheme}>dark mode</button>
    </div>
  )
}

export default Second