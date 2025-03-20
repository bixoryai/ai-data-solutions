@echo off
echo Building Industry Analytics Dashboard...
call npm install
call npm run build
echo Build completed. The dashboard is now available in the build directory.
echo You can access it from the main demo portal. 