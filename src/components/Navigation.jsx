import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme-context'

const Navigation = () => {
    const {theme, toggleTheme } = useTheme()
  return (
    <navbar>
        <div className='flex items-center justify-center gap-5'>
            <Link to='/' >Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blogs' >Blogs</Link>
        </div>
        <div className='flex items-center justify-end'>
            <label className='px-20'>
                <input type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"} />
            </label>
        </div>
    </navbar>
  )
}

export default Navigation