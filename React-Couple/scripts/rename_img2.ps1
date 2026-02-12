$dir='c:\Users\julio\OneDrive\Documentos\GitHub\Projetos\React-Couple\public\img2'
Set-Location -LiteralPath $dir
$files=Get-ChildItem -File | Sort-Object Name
$groups=@{}
foreach($f in $files){
  $base = $f.BaseName -replace '\s*\(\d+\)$',''
  $base = $base -replace '\s+',' '
  $base = $base.Trim()
  if(-not $groups.ContainsKey($base)){ $groups[$base]=@() }
  $groups[$base] += $f
}
$used = @()
$prefixMap = @{}
foreach($base in $groups.Keys){
  $chars = ($base -replace '[^0-9A-Za-z]','')
  if($chars.Length -eq 0){ $chars='img' }
  $prefix = $chars.Substring(0,[math]::Min(6,$chars.Length))
  $orig=$prefix; $n=1
  while($used -contains $prefix){
    $prefix = $orig + $n
    $n++
  }
  $used += $prefix
  $prefixMap[$base]=$prefix
}
foreach($base in $groups.Keys){
  $i=1
  foreach($f in $groups[$base]){
    $new = '{0}-{1}{2}' -f $prefixMap[$base],$i,$f.Extension
    if(Test-Path $new){
      $new = '{0}-{1}_{2}{3}' -f $prefixMap[$base],$i,(Get-Random -Maximum 9999),$f.Extension
    }
    Write-Output ("Renomeando: {0} -> {1}" -f $f.Name,$new)
    Rename-Item -LiteralPath $f.FullName -NewName $new
    $i++
  }
}
Write-Output 'Pronto.'
