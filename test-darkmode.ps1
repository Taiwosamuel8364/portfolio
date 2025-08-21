# Test Dark Mode Functionality
Write-Host "Testing Dark Mode Implementation..." -ForegroundColor Green

# Start local server for testing
Write-Host "Starting local server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-Command", "cd '$PWD'; npm start" -NoNewWindow

# Wait for server to start
Start-Sleep -Seconds 3

# Open browser to test
Write-Host "Opening browser for testing..." -ForegroundColor Yellow
Start-Process "http://localhost:3000"

Write-Host ""
Write-Host "Dark Mode Test Instructions:" -ForegroundColor Cyan
Write-Host "1. Look for the 🌙 button in the top navigation bar" -ForegroundColor White
Write-Host "2. Click it to toggle dark mode" -ForegroundColor White
Write-Host "3. The button should change to ☀️ and the page should turn dark" -ForegroundColor White
Write-Host "4. Click again to return to light mode" -ForegroundColor White
Write-Host "5. Refresh the page - the theme should persist" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to deploy to Vercel when testing is complete..." -ForegroundColor Green
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
