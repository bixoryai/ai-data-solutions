@echo off
echo Building Industry Analytics Dashboard...

REM Install dependencies if needed
call npm install

REM Run TypeScript type checking
echo Running TypeScript type checking...
call npm run type-check

REM Run the build process
echo Building the dashboard...
call npm run build

echo Build completed. The dashboard has been rebuilt.
echo Please refresh the browser to see your changes.
