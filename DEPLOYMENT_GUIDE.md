# 🚀 Deployment Guide - MHLoyche Portfolio

## 📋 What You Need to Deploy

### 1. Frontend (React App)
Location: `my-react-frontend/build/` folder
- ✅ **Already built and ready!**

### 2. Backend (PHP API)
Location: `my-php-backend/` folder
- Needs to be uploaded separately

---

## 📦 Files to Upload to School Server

### **Frontend Files (from `build/` folder)**
Upload these to your server's **root directory** (usually `public_html/` or `www/`):

```
Server Root Directory:
├── index.html          ← Main entry point
├── asset-manifest.json
├── static/
│   ├── css/
│   │   └── main.701ce6d7.css
│   ├── js/
│   │   └── main.aad37861.js
│   └── media/
└── images/
    └── projects/       ← Your project images
```

### **Backend Files (PHP)**
Upload `my-php-backend/` to a subfolder called `api/`:

```
Server Root Directory:
└── api/
    ├── db_connect.php
    ├── get_data.php
    └── (other PHP files)
```

---

## 🔧 Configuration Changes Needed

### **1. Update API URL in React App**

Before building, you need to update where React calls the API.

**File:** `my-react-frontend/src/viewmodels/project_viewmodel.js`

Change from:
```javascript
const response = await fetch('http://localhost:8000/api/get_data.php');
```

To:
```javascript
const response = await fetch('https://your-school-server.com/api/get_data.php');
```

**OR better - use environment variable:**

Create `.env` file in `my-react-frontend/`:
```
REACT_APP_API_URL=https://your-school-server.com/api
```

Then update the fetch:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
const response = await fetch(`${API_URL}/get_data.php`);
```

### **2. Update Database Connection (PHP)**

**File:** `my-php-backend/api/db_connect.php`

Update with your school server's database credentials:
```php
$host = 'school-mysql-server';  // Ask your school for this
$db = 'your_database_name';
$user = 'your_username';
$pass = 'your_password';
$charset = 'utf8mb4';
$port = 3306;  // Default, might be different
```

### **3. Add .htaccess for React Router**

Create this file in your server root to handle React Router:

**File:** `.htaccess` (in server root, next to index.html)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures URLs like `/projects`, `/about`, `/contact` work correctly.

---

## 📤 Upload Methods

### **Option 1: FTP/SFTP (Recommended)**

1. Use FileZilla, WinSCP, or Cyberduck
2. Get credentials from your school (host, username, password)
3. Connect to the server
4. Upload:
   - Contents of `build/` → server root
   - Contents of `my-php-backend/` → `api/` folder
   - `.htaccess` file → server root

### **Option 2: Web-based File Manager**

If your school provides cPanel or similar:
1. Log into your control panel
2. Use File Manager
3. Upload files to `public_html/` or `www/`

### **Option 3: Git (if available)**

If your school server has Git access:
```bash
git clone https://github.com/MHLoyche/Portfolio2025_React.git
cd Portfolio2025_React/my-react-frontend
npm install
npm run build
# Then move build contents to appropriate location
```

---

## ✅ Pre-Deployment Checklist

Before uploading:

- [ ] Update API URL in React code
- [ ] Build production version: `npm run build`
- [ ] Update database credentials in PHP files
- [ ] Create `.htaccess` file
- [ ] Export your MySQL database
- [ ] Test locally with: `npm install -g serve` then `serve -s build`

On server:

- [ ] Upload frontend files from `build/`
- [ ] Upload backend PHP files to `api/`
- [ ] Upload `.htaccess` file
- [ ] Import MySQL database on school server
- [ ] Update database connection in `db_connect.php`
- [ ] Test all pages (Home, Projects, About, Contact)
- [ ] Test API endpoints
- [ ] Check browser console for errors

---

## 🐛 Common Issues & Solutions

### **Issue: "Page not found" on refresh**
**Solution:** Make sure `.htaccess` is uploaded and mod_rewrite is enabled

### **Issue: API calls failing**
**Solution:** 
- Check API URL is correct
- Verify CORS settings on server
- Check PHP error logs

### **Issue: Database connection failed**
**Solution:** 
- Verify database credentials
- Check if MySQL is running on school server
- Ensure your database user has proper permissions

### **Issue: Images not loading**
**Solution:**
- Verify `images/` folder was uploaded
- Check image paths in database start with `/images/`
- Check file permissions (should be 644 for files, 755 for folders)

---

## 📞 Questions to Ask Your School IT

Before deploying, get this information:

1. **Server Access:**
   - FTP/SFTP hostname
   - Username and password
   - Which folder is the web root? (`public_html/`, `www/`, `htdocs/`)

2. **Database:**
   - MySQL server hostname
   - Database name
   - Database username and password
   - phpMyAdmin access (for importing database)

3. **Server Configuration:**
   - PHP version available
   - Is mod_rewrite enabled? (for .htaccess)
   - Any file upload size limits
   - Domain/URL where site will be hosted

---

## 🎯 Quick Deploy Steps

1. **Prepare locally:**
   ```bash
   cd my-react-frontend
   npm run build
   ```

2. **Upload via FTP:**
   - Upload `build/*` → server root
   - Upload `my-php-backend/*` → `api/` folder
   - Upload `.htaccess` → server root

3. **Configure database:**
   - Import your MySQL database
   - Update `api/db_connect.php` with server credentials

4. **Test:**
   - Visit `https://your-school-server.com`
   - Test all pages
   - Check if projects load

---

## 📊 Final Server Structure

```
your-school-server.com/
├── .htaccess                    ← React Router config
├── index.html                   ← React app entry
├── asset-manifest.json
├── static/
│   ├── css/
│   │   └── main.701ce6d7.css
│   └── js/
│       └── main.aad37861.js
├── images/
│   └── projects/
│       ├── project1.jpg
│       └── project2.webp
└── api/
    ├── db_connect.php           ← Update credentials!
    └── get_data.php
```

---

Good luck with your deployment! 🚀
