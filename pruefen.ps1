# Ruft Codex zum Gegenlesen auf und legt die Befunde in docs/PRUEFBERICHT.md ab.
#
#   .\pruefen.ps1
#   .\pruefen.ps1 -Auftrag "Pruefe nur app/coaching/page.tsx auf falsche Preise"
#
# Die Windows-Variable ANTHROPIC_AUTH_TOKEN enthaelt auf diesem Rechner einen
# OpenRouter-Schluessel. Solche Variablen koennen ein Werkzeug an der
# Abo-Anmeldung vorbei auf kostenpflichtiges Guthaben leiten. Sie werden hier
# nur fuer diesen einen Aufruf abgeschaltet, nicht im System geloescht.

param(
    [string]$Auftrag = ""
)

$ErrorActionPreference = "Continue"
Set-Location $PSScriptRoot

foreach ($v in @("ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_API_KEY", "OPENAI_API_KEY", "OPENAI_BASE_URL")) {
    if (Test-Path "env:$v") { Remove-Item "env:$v" }
}

if (-not (Get-Command codex -ErrorAction SilentlyContinue)) {
    Write-Host "Codex ist nicht installiert. Einmalig: npm install -g @openai/codex" -ForegroundColor Yellow
    exit 1
}

if ($Auftrag -eq "") {
    $Auftrag = @"
Lies docs/AUFTRAG.md und docs/ENTSCHEIDUNGEN.md. Pruefe dann die Aenderungen im
Arbeitsverzeichnis (git status, git diff) gegen den Auftrag und die
Abnahmekriterien.

Du liest nur gegen. Aendere keine Dateien.

Achte besonders auf: Widersprueche zu docs/ENTSCHEIDUNGEN.md, falsche oder
uneinheitliche Preise, Versprechen die einer Garantie nahekommen, kaputte oder
tote Links, Platzhaltertexte die live gehen wuerden, und Fehler die den Build
brechen.

Gib eine nach Schwere sortierte Liste aus. Jeder Befund mit Datei, Zeile,
konkretem Problem und Vorschlag. Wenn nichts zu beanstanden ist, schreib das
klar hin statt Kleinigkeiten zu erfinden. Antworte auf Deutsch.
"@
}

Write-Host "Codex liest gegen. Das dauert ein bis zwei Minuten ..." -ForegroundColor Cyan

$ziel     = Join-Path $PSScriptRoot "docs\PRUEFBERICHT.md"
$befundTmp = Join-Path $env:TEMP "codex-befund.md"
$protokoll = Join-Path $env:TEMP "codex-protokoll.txt"
if (Test-Path $befundTmp) { Remove-Item $befundTmp }

# Der Auftrag geht ueber die Standardeingabe hinein ("codex exec -"). Als
# Argument uebergeben wartet Codex zusaetzlich auf Tastatureingaben und bleibt
# in Skripten haengen. --output-last-message liefert nur die Befunde statt des
# gesamten Arbeitsprotokolls.
$Auftrag | codex exec - --color never --output-last-message $befundTmp |
    Set-Content -LiteralPath $protokoll -Encoding utf8

if (-not (Test-Path $befundTmp)) {
    Write-Host "Codex hat keinen Bericht geliefert. Protokoll: $protokoll" -ForegroundColor Yellow
    exit 1
}

$kopf = "# Pruefbericht",
        "",
        "Erstellt von Codex am $(Get-Date -Format 'dd.MM.yyyy HH:mm').",
        "Vollstaendiges Arbeitsprotokoll: $protokoll",
        "",
        "---",
        ""

($kopf + (Get-Content -LiteralPath $befundTmp -Encoding utf8)) |
    Set-Content -LiteralPath $ziel -Encoding utf8

Write-Host "Fertig. Befunde stehen in docs\PRUEFBERICHT.md" -ForegroundColor Green
