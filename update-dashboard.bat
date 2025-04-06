@echo off
echo Updating Industry Analytics Dashboard...

cd industry-analytics\dashboard-demo

REM Run the build process
call npm run build

cd ..\..\

echo Update completed. The dashboard has been rebuilt.
echo Please refresh the browser to see your changes.