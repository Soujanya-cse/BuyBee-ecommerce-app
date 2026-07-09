$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$backendDir = Join-Path $projectRoot 'backend'
$jarPath = Join-Path $backendDir 'target/backend-0.0.1-SNAPSHOT.jar'

$mavenCandidates = @(
    'mvn',
    'mvn.cmd',
    'D:\Downloads\apache-maven-3.9.15-bin\apache-maven-3.9.15\bin\mvn.cmd',
    'C:\Users\sowja\Downloads\apache-maven-3.9.15-bin\apache-maven-3.9.15\bin\mvn.cmd'
)

$foundMaven = $null
foreach ($candidate in $mavenCandidates) {
    if (Get-Command $candidate -ErrorAction SilentlyContinue) {
        $foundMaven = $candidate
        break
    }
}

if (-not $foundMaven) {
    Write-Error 'Maven was not found. Install Maven or update scripts/run-backend.ps1 with its full path.'
    exit 1
}

if (-not (Test-Path $jarPath)) {
    Write-Host 'Building backend jar first...'
    Push-Location $backendDir
    try {
        & $foundMaven -q -DskipTests package
    }
    finally {
        Pop-Location
    }
}

Push-Location $backendDir
try {
    java -jar (Join-Path $backendDir 'target/backend-0.0.1-SNAPSHOT.jar')
}
finally {
    Pop-Location
}
