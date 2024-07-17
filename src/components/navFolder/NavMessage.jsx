import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
    <a className='nav-link nav-icon' href="#" data-bs-toggle= "dropdown">
        <i className='bi bi-chat-left-text '></i>
        <span className='badge bg-success badge-number ' >4</span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
            You have new notifications
            <a href="#">
                <span className='badge rounded-pill bg-primary p-2 ms-2' >
                    View all
                </span>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='message-item' >
           <a href="#">
            <img src="assets/img/messages-1.jpg" 
            alt=""
            className='rounded-circle'
            />
            <div>
                <h4>Akshay</h4>
                <p>
                    Heyy are you interested in joining our company?
                </p>
                <p> 2 minute ago</p>
            </div>
           </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='message-item' >
           <a href="#">
            <img src="assets/img/messages-2.jpg" 
            alt=""
            className='rounded-circle'
            />
            <div>
                <h4>Amar</h4>
                <p>
                    I just saw your work, how much you charge for a single project ?
                </p>
                <p> 30 minute ago</p>
            </div>
           </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='message-item' >
           <a href="#">
            <img src="assets/img/messages-3.jpg" 
            alt=""
            className='rounded-circle'
            />
            <div>
                <h4>Kabir</h4>
                <p>
                    Heyy are you available for a call right now?
                </p>
                <p> 2 hours ago</p>
            </div>
           </a>
        </li>
        
        <li>
            <hr className='dropdown-divider'/>
        </li>
        <li className='dropdown-footer'>
            <a href="#"> Show all the notifications</a>
        </li>
    </ul>
</li>
  )
}

export default NavMessage