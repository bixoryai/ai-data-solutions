@echo off
echo Updating Domain Dataset Curation Dashboard...

cd domain-dataset-curation\dashboard-demo

REM Run the build process
call npm run build

cd ..\..\

echo Update completed. The dashboard has been rebuilt.
