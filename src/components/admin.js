const admin = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>Admin Dashboard</title>
    
        <!-- Montserrat Font -->
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet">
    
        <!-- Material Icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
        <!-- Custom CSS -->
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <div class="grid-container">
    
            <!-- Header -->
            <header class="header">
                <div class="menu-icon" onclick="openSidebar()">
                    <span class="material-icons-outlined">menu</span>
                </div>
                <div class="header-left">
                    <span class="material-icons-outlined">search</span>
                </div>
                <div class="header-right">
                    <span class="material-icons-outlined">notifications</span>
                    <span class="material-icons-outlined">email</span>
                    <span class="material-icons-outlined">account_circle</span>
                </div>
            </header>
            <!-- End Header -->
    
            <!-- Sidebar -->
            <aside id="sidebar">
                <div class="sidebar-title">
                    <div class="sidebar-brand">
                        <a href="/"><span class="material-icons-outlined">inventory</span> Home</a>
                    </div>
                    <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
                </div>
    
                <ul class="sidebar-list">
                    <li class="sidebar-list-item">
                        <a href="/admin/project" target="_blank">
                            <span class="material-icons-outlined">dashboard</span> Dashboard
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/admin/project" target="_blank">
                            <span class="material-icons-outlined">inventory_2</span> Products
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/admin/project" target="_blank">
                            <span class="material-icons-outlined">fact_check</span> Inventory
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/admin/project" target="_blank">
                            <span class="material-icons-outlined">add_shopping_cart</span> Purchase Orders
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/admin/project" target="_blank">
                            <span class="material-icons-outlined">shopping_cart</span> Sales Orders
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/admin/project" target="_blank">
                            <span class="material-icons-outlined">poll</span> Reports
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/admin/project" target="_blank">
                            <span class="material-icons-outlined">settings</span> Settings
                        </a>
                    </li>
                </ul>
            </aside>
            <!-- End Sidebar -->
    `;
};
export default admin;
