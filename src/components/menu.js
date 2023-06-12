import "../../style.css";
const menu = () => {
  return `
    
  <div class="navbar">
  <div class="logo">
      <a href="#"><img src="http://porto-html-v2.surge.sh/assets/images/LOGO%20(2).png"></a>
  </div>
  <div class="menu">
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/about">Contact</a></li>
          <li><a href="/project">Project</a></li>
          <li style="text-decoration: none"><a href="/admin">Admin</a></li> 
      </ul>
  </div>
  <div class="login-btn">Login</div>
</div>   
    `;
};

export default menu;
