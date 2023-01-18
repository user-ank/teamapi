import React from 'react'

export default function Header() {
  return (
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <p class="navbar-brand"><a href="/">E-commerce</a></p>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li id="home"><a href="/">HOME</a></li>
                <li id="about"><a href="/poststore">POSTS</a></li>
                <li id="contact"><a href="/signin">SIGN IN</a></li>
                <li id="contact"><a href="/add_posts">ADD POST</a></li>
            </ul>
        </div>
    </nav>
  )
}

