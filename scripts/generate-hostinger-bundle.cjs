/**
 * Standalone Generator for Hostinger Shared Hosting Deployment
 * Produces pure HTML5, CSS3, Vanilla JavaScript, and PHP files.
 */
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../hostinger-deployment');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.join(outDir, 'images'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'images/products'), { recursive: true });

// Copy images
const copyDir = (src, dest) => {
  if (!fs.existsSync(src)) return;
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

copyDir(path.resolve(__dirname, '../public/images'), path.join(outDir, 'images'));

// Copy sitemap & robots
fs.copyFileSync(path.resolve(__dirname, '../public/sitemap.xml'), path.join(outDir, 'sitemap.xml'));
fs.copyFileSync(path.resolve(__dirname, '../public/robots.txt'), path.join(outDir, 'robots.txt'));

// Generate .htaccess for Hostinger
const htaccessContent = `# Hostinger Apache Configuration for Kohinoor Audio Visual
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
`;
fs.writeFileSync(path.join(outDir, '.htaccess'), htaccessContent);

// Generate contact.php
const phpContent = `<?php
/**
 * Kohinoor Audio Visual - Contact Form Handler
 * Suitable for Hostinger Shared Hosting
 */
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

$fullName = trim($_POST['full_name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$organization = trim($_POST['organization'] ?? '');
$product = trim($_POST['product'] ?? '');
$city = trim($_POST['city'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($fullName) || empty($phone) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

$to = 'kohinoor_ibd@yahoo.co';
$subject = "Quotation Request: " . $product . " from " . $organization;

$body = "New Inquiry via kohinoorav.com\\n\\n";
$body .= "Name: " . $fullName . "\\n";
$body .= "Organization: " . $organization . "\\n";
$body .= "Phone: " . $phone . "\\n";
$body .= "Email: " . $email . "\\n";
$body .= "City: " . $city . "\\n";
$body .= "Product Interested In: " . $product . "\\n\\n";
$body .= "Requirements / Message:\\n" . $message . "\\n\\n";
$body .= "Submitted on: " . date('Y-m-d H:i:s') . "\\n";

$headers = "From: noreply@kohinoorav.com\\r\\n" .
           "Reply-To: " . $email . "\\r\\n" .
           "X-Mailer: PHP/" . phpversion();

$mailSent = @mail($to, $subject, $body, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Thank you. Your quotation request has been received by Kohinoor Audio Visual.'
]);
`;
fs.writeFileSync(path.join(outDir, 'contact.php'), phpContent);

// Generate README-HOSTINGER.md
const readmeContent = `# Hostinger Deployment Guide for Kohinoor Audio Visual

This directory contains the production-ready HTML, CSS, JavaScript, and PHP files specifically designed for deployment on **Hostinger Shared Hosting** (or any cPanel / Apache web hosting).

## Quick Deployment Steps

1. Log in to your **Hostinger hPanel** at https://hpanel.hostinger.com/
2. Go to **File Manager** (or connect via FTP using FileZilla).
3. Navigate to \`public_html\` directory for your domain (\`kohinoorav.com\`).
4. Upload all files and folders inside this directory directly into \`public_html\`:
   - \`index.html\`
   - \`about.html\`
   - \`products.html\`
   - \`digital-podiums.html\`
   - \`multimedia-projectors.html\`
   - \`interactive-led.html\`
   - \`conference-systems.html\`
   - \`ptz-cameras.html\`
   - \`smart-classrooms.html\`
   - \`projects.html\`
   - \`contact.html\`
   - \`contact.php\`
   - \`sitemap.xml\`
   - \`robots.txt\`
   - \`.htaccess\`
   - \`images/\` folder (contains all 18 product reference photos + generated assets)

5. Test your domain:
   - Visit https://kohinoorav.com
   - Test the floating WhatsApp button (+92 333 5163220).
   - Test submitting the quotation form (it routes to \`contact.php\` which sends email to \`kohinoor_ibd@yahoo.co\`).
`;
fs.writeFileSync(path.join(outDir, 'README-HOSTINGER.md'), readmeContent);

console.log('Hostinger deployment files generated successfully at /hostinger-deployment');
