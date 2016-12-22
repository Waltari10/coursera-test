call color A
call START "" "C:\Program Files (x86)\Atlassian\SourceTree\SourceTree.exe"
call atom .
call browser-sync start --server --directory --files "**/*"