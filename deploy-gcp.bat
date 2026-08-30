@echo off
TITLE JMN Journal - GCP Cloud Run Deployer
CLS
cd /d "%~dp0"

ECHO =========================================================================
ECHO        JMN Journal of Medical Sciences - Cloud Run Deployer              
ECHO =========================================================================
ECHO.

IF "%~1"=="" (
    SET /P PROJECT_ID="Enter your GCP Project ID: "
) ELSE (
    SET PROJECT_ID=%~1
)

IF "%PROJECT_ID%"=="" (
    ECHO [ERROR] Project ID is required.
    PAUSE
    EXIT /B 1
)

ECHO.
ECHO Setting GCP Project to %PROJECT_ID%...
CALL gcloud config set project %PROJECT_ID%

ECHO.
ECHO Enabling required GCP Services...
CALL gcloud services enable run.googleapis.com artifactregistry.googleapis.com compute.googleapis.com cloudbuild.googleapis.com certificatemanager.googleapis.com

ECHO.
ECHO Submitting build to Cloud Build ^& deploying to Cloud Run (asia-south1)...
CALL gcloud builds submit --tag asia-south1-docker.pkg.dev/%PROJECT_ID%/jmn-journal/web:latest

ECHO.
ECHO Deploying to Cloud Run...
CALL gcloud run deploy jmn-journal ^
  --image=asia-south1-docker.pkg.dev/%PROJECT_ID%/jmn-journal/web:latest ^
  --region=asia-south1 ^
  --platform=managed ^
  --allow-unauthenticated ^
  --port=8080 ^
  --min-instances=1 ^
  --max-instances=10 ^
  --memory=512Mi

ECHO.
ECHO [SUCCESS] Deployment completed!
PAUSE
