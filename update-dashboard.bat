@echo off
echo Updating Industry Analytics Dashboard...
xcopy /y industry-analytics\dashboard-demo\src\components\*.jsx industry-analytics\dashboard-demo\build\static\js\
echo Update completed. Please refresh the dashboard in your browser. 