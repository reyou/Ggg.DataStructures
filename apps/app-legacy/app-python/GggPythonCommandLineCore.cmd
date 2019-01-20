@echo off
:start
cls
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 

:version
echo "python --version =>"
python --version
echo.
pause
echo.

:Python can be passed arbitrary code as a string in the shell
echo "python -c 'print("Hello, World")' =>"
python -c 'print("Hello, World")'
echo.
pause
echo.

goto start
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause