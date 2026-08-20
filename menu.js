document.write(`
<style>
    /* Thanh Menu dùng chung chuẩn WordPress */
    .wp-nav-menu { background: #2c3e50; font-family: 'Segoe UI', Arial, sans-serif; position: sticky; top: 0; z-index: 9999; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
    .wp-nav-menu ul { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; }
    .wp-nav-menu ul li { position: relative; }
    .wp-nav-menu ul li a { display: block; padding: 14px 18px; color: #fff; text-decoration: none; font-weight: 600; font-size: 14px; transition: 0.3s; }
    .wp-nav-menu ul li a:hover { background: #e67e22; color: #fff; }
    
    /* Menu con thả xuống (Dropdown) khi rê chuột vào */
    .wp-nav-menu ul li ul { display: none; position: absolute; top: 100%; left: 0; background: #34495e; min-width: 260px; flex-direction: column; box-shadow: 0 4px 8px rgba(0,0,0,0.15); padding: 0; }
    .wp-nav-menu ul li ul li a { padding: 12px 20px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13.5px; font-weight: normal; }
    .wp-nav-menu ul li ul li a:hover { background: #d35400; }
    .wp-nav-menu ul li:hover > ul { display: flex; }
</style>

<nav class="wp-nav-menu">
    <ul>
        <li><a href="https://github.io">Trang Chủ KTS</a></li>
        
        <!-- 1. Danh mục Tủ Quần Áo & Giường -->
        <li>
            <a href="https://github.io">Tủ Nhựa Quần Áo ▾</a>
            <ul>
            
            </ul>
        </li>

        <!-- 2. Danh mục Tủ Cầu Thang -->
        <li>
            <a href="https://github.io">Tủ Cầu Thang ▾</a>
            <ul>
                <li><a href="https://github.ioanh-quan-kdt-van-phu/">Công trình Anh Quân (KĐT Văn Phú)</a></li>
            </ul>
        </li>

        <!-- 3. Danh mục Tủ Giày -->
        <li>
            <a href="https://github.io">Tủ Giày Nhựa ▾</a>
            <ul>

            </ul>
        </li>

        <!-- 4. Danh mục Tủ Bếp -->
        <li><a href="https://github.io">Tủ Bếp Nhựa</a></li>
        
        <li><a href="https://tunhuahadong.io.vn" target="_blank" style="color: #f1c40f;">Trang Chủ Xưởng (TNHĐ)</a></li>
    </ul>
</nav>
`);

// Định vị và xử lý thay đổi liên kết ngầm sau khi HTML được render xong
setTimeout(function() {
    var localLinks = document.querySelectorAll('a[href*="tunhuahadong.io.vn"]');
    localLinks.forEach(function(link) {
        link.href = link.href.replace('tunhuahadong.io.vn', 'tunhua.io.vn');
    });
}, 300);
