$sourceDir = "..\Hershey watermark removed frames"
$targetDir = "public\images\chocolate"
# Ensure target exists
if (!(Test-Path -Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force
}

for ($i = 1; $i -le 120; $i++) {
    $num = "{0:D3}" -f $i
    $srcJpg = Join-Path $sourceDir "ezgif-frame-$num.jpg"
    $srcJpeg = Join-Path $sourceDir "ezgif-frame-$num.jpeg"
    $dest = Join-Path $targetDir "$i.jpg"

    if (Test-Path $srcJpg) {
        Copy-Item $srcJpg $dest
    } elseif (Test-Path $srcJpeg) {
        Copy-Item $srcJpeg $dest
    } else {
        Write-Warning "Frame $i not found"
    }
}
Write-Host "Asset setup complete."
