@echo off
echo Building Predictive Maintenance Dashboard...

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    call npm install
)

REM Run the build script
echo Running build...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Error building the dashboard.
    exit /b %ERRORLEVEL%
)

echo Build completed successfully.
echo Files are available in the 'build' directory. 