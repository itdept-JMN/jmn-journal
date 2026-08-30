@echo off
TITLE JMN Journal of Medical Sciences - Development Server
CLS
ECHO =========================================================================
ECHO           JMN Journal of Medical Sciences - Website Launcher             
ECHO =========================================================================
ECHO.
ECHO Starting JMN Journal local web application...
ECHO Location: %CD%
ECHO.

:: Check Node.js installation
WHERE node >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    ECHO [ERROR] Node.js is not installed or not found in system PATH.
    ECHO Please install Node.js (v18 or higher) from https://nodejs.org/
    PAUSE
    EXIT /B 1
)

:: Check if node_modules exists, install if missing
IF NOT EXIST "node_modules\" (
    ECHO [INFO] node_modules directory not found. Installing dependencies...
    CALL npm install
    IF %ERRORLEVEL% NEQ 0 (
        ECHO [ERROR] Failed to install dependencies. Please check your internet connection.
        PAUSE
        EXIT /B 1
    )
)

:: Launch browser after 3 seconds in background
START "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"

:: Start Next.js dev server
ECHO [SUCCESS] Launching Next.js development server on http://localhost:3000...
ECHO Press Ctrl+C in this window to stop the server.
ECHO.

CALL npm run dev
PAUSE
