@echo off
echo Starting AI Data Solutions Demo Portal Server on port 3000 using npm http-server...
echo If this is your first time running this server, it will install the http-server package.

REM Check if http-server is installed globally
npx http-server --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Installing http-server package...
    npm install -g http-server
)

REM Start the server
echo Starting server...
npx http-server -p 3000

echo Server stopped.
